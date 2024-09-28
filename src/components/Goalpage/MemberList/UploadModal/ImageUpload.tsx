// ImageUpload.tsx
import React, { ChangeEvent, useState, useEffect } from 'react';

interface ImageUploadProps {
    image: File | null; // 이미지 상태
    setImage: (file: File | null) => void; // 이미지 상태를 업데이트하는 함수
    onNext: () => void; // 다음 단계로 이동
    onCancel: () => void; // 취소 시 모달 닫기
}

export default function ImageUpload({ image, setImage, onNext, onCancel }: ImageUploadProps) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(image);
        } else {
            setPreviewUrl(null);
        }
    }, [image]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        }
    };

    const handleImageDelete = () => {
        setImage(null);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <input
                type="file"
                accept="image/*"
                className="w-full mb-4"
                onChange={handleImageChange}
            />
            {previewUrl ? (
                <div className="relative w-full h-[200px] mb-4 bg-gray-300 rounded-lg">
                    <img
                        src={previewUrl}
                        alt="preview"
                        className="w-full h-full object-contain"
                    />
                    <button
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        onClick={handleImageDelete}
                    >
                        X
                    </button>
                </div>
            ) : (
                <div className="w-full h-[200px] bg-gray-200 mb-4" />
            )}
            <button
                className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 mb-4"
                onClick={onNext}
                disabled={!image} // 이미지가 없으면 버튼 비활성화
            >
                업로드
            </button>
            <button
                className="w-full bg-gray-300 text-black rounded-lg py-2 hover:bg-gray-400"
                onClick={onCancel}
            >
                취소
            </button>
        </div>
    );
}
