import React, { ChangeEvent, useState } from 'react';
import cn from '../../../lib/cn';

interface ImageUploadModalProps {
    isVisible: boolean;
    onClose: () => void;
}

export default function ImageUploadModal({ isVisible, onClose }: ImageUploadModalProps) {
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageDelete = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    // Function to handle background click
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose(); // Call the onClose prop from parent to close the modal
        }
    };

    return isVisible ? (
        <div
            className={cn(
                'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50',
                'flex items-center justify-center z-50'
            )}
            onClick={handleBackgroundClick} // Attach the background click handler
        >
            <div
                className={cn(
                    'w-[500px] bg-white rounded-lg p-8',
                    'flex flex-col items-center'
                )}
            >
                <h2 className="text-xl font-bold mb-4">이미지 업로드</h2>
                <input
                    type="file"
                    accept="image/*"
                    className="w-full mb-4"
                    onChange={handleImageChange}
                />
                {previewUrl ? (
                    <div className="relative w-full h-[200px] mb-4">
                        <img
                            src={previewUrl}
                            alt="preview"
                            className="w-full h-full object-cover"
                        />
                        <button
                            className={cn(
                                'absolute top-2 right-2 bg-red-500 text-white',
                                'rounded-full w-6 h-6 flex items-center justify-center'
                            )}
                            onClick={handleImageDelete}
                        >
                            X
                        </button>
                    </div>
                ) : (
                    <div className="w-full h-[200px] bg-gray-200 mb-4" />
                )}
                <button
                    className={cn(
                        'w-full bg-blue-500 text-white rounded-lg',
                        'py-2 hover:bg-blue-600 mb-4' // Add margin-bottom for spacing
                    )}
                >
                    업로드
                </button>
                <button
                    className={cn(
                        'w-full bg-gray-300 text-black rounded-lg',
                        'py-2 hover:bg-gray-400'
                    )}
                    onClick={onClose} // Call the onClose prop from parent
                >
                    닫기
                </button>
            </div>
        </div>
    ) : null;
}
