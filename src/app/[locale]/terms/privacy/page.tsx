// 개인정보처리방침 페이지 (간단하게)
// - 이름, 별명, 프로필사진 등을 보관
// - 유저를 식별하고 Rate-limit 과 같이 특정 서비스의 이용량을 제한하기 위함

import { NextPage } from "next";

const PrivacyPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-48">
      <h1 className="mb-6 text-4xl font-bold">개인정보처리방침</h1>
      <p className="mb-4">
        본 개인정보처리방침은 당사의 서비스 이용과 관련하여 사용자의 개인정보를
        어떻게 수집, 사용, 보호하는지에 대한 정보를 제공합니다.
      </p>
      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        1. 수집하는 개인정보 항목
      </h2>
      <ul className="mb-4 list-inside list-disc">
        <li>이름</li>
        <li>별명</li>
        <li>프로필 사진</li>
      </ul>
      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        2. 개인정보의 수집 및 이용목적
      </h2>
      <p className="mb-4">수집된 개인정보는 다음과 같은 목적으로 이용됩니다:</p>
      <ul className="mb-4 list-inside list-disc">
        <li>사용자 식별</li>
        <li>서비스 이용량 제한 (예: Rate-limit)</li>
      </ul>
      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        3. 개인정보의 보유 및 이용 기간
      </h2>
      <p className="mb-4">
        개인정보는 회원 탈퇴 시 즉시 파기됩니다. 단, 관련 법령에 의해 보존이
        필요한 경우 해당 기간 동안 보관됩니다.
      </p>
      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        4. 개인정보의 파기절차 및 방법
      </h2>
      <p className="mb-4">
        개인정보는 목적 달성 후 즉시 파기되며, 전자적 파일 형태의 정보는 기술적
        방법을 통해 안전하게 삭제됩니다.
      </p>
    </div>
  );
};

export default PrivacyPage;
