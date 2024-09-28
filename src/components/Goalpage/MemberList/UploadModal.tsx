import React, { useState } from 'react';
import ImageUpload from './UploadModal/ImageUpload.tsx';
import SelectRoutineList from './UploadModal/SelectRoutineList.tsx';
import cn from '../../../lib/cn.ts';
import { API } from '../../../lib/api/index.ts';
import { LiaCloneSolid } from 'react-icons/lia';

interface MultiStepModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function MultiStepModal({ isVisible, onClose }: MultiStepModalProps) {
  const [step, setStep] = useState<number>(1); // 1: 이미지 업로드, 2: 루틴 선택
  const [index, setIndex] = useState<number>(0); // 루틴 인덱스
  const [image, setImage] = useState<File | null>(null); // 이미지 상태
  const [selectedRoutine, setSelectedRoutine] = useState<string>(''); // 선택된 루틴

  const handleNextStep = () => {
      setStep(step + 1);
  };

  const handlePreviousStep = () => {
      setStep(step - 1);
  };

  const handleCancel = () => {
      onClose(); // 모달 닫기
  };

  const handleUpload = async () => {
      if (!image || !selectedRoutine) return;

      try {
          // FormData 객체 생성
        const formData = new FormData();
        formData.append('routineIndex', index.toString()); // 인덱스 값을 문자열로 변환하여 추가
        formData.append('routineName', selectedRoutine); // 루틴 이름 추가
        formData.append('file', image); // 이미지 파일 추가

        // API 호출
        const response = await API.User.uploadRoutine(
            (index + 1).toString(), // 루틴 인덱스
            selectedRoutine, // 선택한 루틴
            image // 전송할 이미지 파일
        );
          
          if (response.status === 'OK') {
              setStep(3); // 성공 시 3단계로 이동
          } else {
              console.error('업로드 실패:', response);
              setStep(4); // 실패 시 4단계로 이동 (재시도 안내)
          }

      } catch (error) {
          console.error('업로드 중 오류 발생:', error);
          setStep(4); // 실패 시 4단계로 이동 (재시도 안내)
      }
  };

  return isVisible ? (
      <div
          className={cn(
              'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50',
              'flex items-center justify-center z-50'
          )}
      >
          <div
              className={cn(
                  'w-[500px] bg-white rounded-lg p-8',
                  'flex flex-col items-center'
              )}
          >
              {step === 1 && (
                  <>
                      <h2 className="text-xl font-bold mb-4">이미지 업로드</h2>
                      <ImageUpload
                          image={image} // 이미지 상태 전달
                          setImage={setImage} // 이미지 상태 업데이트 함수 전달
                          onNext={handleNextStep}
                          onCancel={handleCancel}
                      />
                  </>
              )}
              {step === 2 && (
                  <>
                      <h2 className="text-xl font-bold mb-4">루틴 선택</h2>
                      <SelectRoutineList
                          index={index} // 루틴 인덱스 전달
                          setIndex={setIndex} // 루틴 인덱스 업데이트 함수 전달
                          selectedRoutine={selectedRoutine} // 선택된 루틴 전달
                          setSelectedRoutine={setSelectedRoutine} // 루틴 상태 업데이트 함수 전달
                          onNext={handleUpload} // 업로드 시도 함수 전달
                          onPrevious={handlePreviousStep}
                          onCancel={handleCancel}
                      />
                  </>
              )}
              {step === 3 && (
                  <div className="text-center">
                      <h2 className="text-xl font-bold mb-4">성공적으로 등록되었습니다!</h2>
                      <button
                          className={cn(
                              'w-full bg-blue-500 text-white rounded-lg',
                              'py-2 hover:bg-blue-600 mb-4'
                          )}
                          onClick={onClose}
                      >
                          닫기
                      </button>
                  </div>
              )}
              {step === 4 && (
                  <div className="text-center">
                      <h2 className="text-xl font-bold mb-4">업로드 실패. 재시도 하세요.</h2>
                      <button
                          className={cn(
                              'w-full bg-blue-500 text-white rounded-lg',
                              'py-2 hover:bg-blue-600 mb-4'
                          )}
                          onClick={handleCancel}
                      >
                          닫기
                      </button>
                  </div>
              )}
          </div>
      </div>
  ) : null;
}