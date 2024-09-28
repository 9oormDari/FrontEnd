// idStore.ts
import { create } from 'zustand';

// 상태 타입을 정의합니다.
interface IdState {
  id: string;
}

// 액션 타입을 정의합니다.
interface IdActions {
  setId: (newId: string) => void;
}

// 상태와 액션을 합친 타입을 정의합니다.
type IdStore = IdState & IdActions;

// 상태를 관리하는 zustand 스토어를 생성합니다.
const useIdStore = create<IdStore>((set) => ({
  id: '', // 초기 상태 값

  // setId 함수는 새로운 id 값을 받아서 상태를 업데이트합니다.
  setId: (newId) => set(() => ({ id: newId })),
}));

export default useIdStore;
