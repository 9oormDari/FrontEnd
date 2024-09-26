export default function Profile() {
    return (
        <div className="w-full max-w-lg flex flex-col items-center justify-start p-8 pt-0">
            <h2 className="text-2xl font-bold mb-6">프로필</h2>

            {/* 사진 영역 */}
            <div className="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4"></div>

            {/* 닉네임 */}
            <p className="text-xl font-semibold mb-4">홍길동</p>

            {/* 프로필 수정 버튼 */}
            <button className="w-[230px] h-[70px] bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                프로필 수정
            </button>
        </div>
    );
}
