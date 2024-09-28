// store/cloudStore.ts
import { create } from 'zustand';

interface CloudState {
    key: number;
    refreshCloud: () => void;
}

export const useCloudStore = create<CloudState>((set) => ({
    key: 0, // 초기 키값
    refreshCloud: () => set((state) => ({ key: state.key + 1 })), // 구름 재렌더를 위한 키값 증가
}));
