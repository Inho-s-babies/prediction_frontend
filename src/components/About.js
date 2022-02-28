import React from "react";

function About({ contract, endDate }) {
  return (
    <div>
      <div>
        <h3>이 프로젝트에 대해 알려주세요!</h3>
        <p>
          2022년 대선 후보 중 최종 당선자를 예측하는 예측 시장 프로젝트입니다.
          최종 당선자를 맞춘 사람은 승리하며 총 상금의 일부분을 가져가게 됩니다.
        </p>
        <p>
          베팅 가능 기한은
          <span className="text-danger"> {endDate.toString()}</span>까지 입니다.
        </p>
        <p>
          <b>상금 수령 가능 조건</b>은 다음과 같습니다:
        </p>
        <p>1. 당선된 후보에게 0보다 많은 이더를 베팅</p>
        <p>2. 관리자(oracle)이 선거 결과를 컨트랙트에 보고한 이후</p>
        <p>
          선거 결과 보고 여부는{" "}
          <span style={{ backgroundColor: "#0dcaf0" }}>
            Check My Betting Status
          </span>
          에서 볼 수 있습니다.
        </p>
      </div>
      <hr />
      <div>
        <h3>정산 알고리즘을 알고 싶어요!</h3>
        <p>
          경마에서 흔히 사용하는 패리 뮤츄얼 방식으로 배당률을 계산하여 1등을
          맞춘 참가자에게만 상금을 지급합니다.
        </p>
        <p>
          <i>
            예시) 총 베팅 금액이 7300만원이고 해당 후보에 베팅한 금액이
            1000만원이라면 7300만원을 1000만원으로 나눈 7.3이 배당률이 된다
          </i>
        </p>
        <p>
          여기서 서비스 호스트의 수익성을 고려하여 호스트(oracle)가 결과보고를
          한 시점에서 전체 상금의 1%는 호스트의 지갑으로 전송되며 남은 99%의
          상금은 승자들이 나눠 갖습니다.
        </p>
        <p>
          <i>
            상금 식 : 총상금(A+B+C+D) / 해당 후보에게 모인 배팅 금액 * 개인이
            베팅한 금액 * 0.99
          </i>
        </p>
      </div>
      <hr />
      <div>
        <h3>이 프로젝트에 블록체인이 왜 필요한가요?</h3>
        <p>
          인터넷 상에는 이미 수많은 예측 시장 프로젝트들이 존재합니다. 하지만 이
          프로젝트들의 코드는 많은 경우 투명하지 않아서 그들이 표방하는
          알고리즘대로 상금을 지급하는지에 대한 신뢰성 문제를 항상 가지고
          있습니다.
        </p>
        <p>
          이 프로젝트는 신뢰성 문제를 해결하기 위해 프로젝트에 사용된 함수들을
          컨트랙트 코드로 작성해서 이더리움 테스트넷인 Ropsten 체인에
          배포했습니다. 컨트랙트가 배포되면 배포자는 더 이상 코드를 변경할 수
          없으며 누구나 투명하게 코드를 조회할 수 있기 때문에 신뢰성 문제를
          해결할 수 있습니다. 코드가 궁금하신 분들은 ropsten.ethersan.io에
          접속하셔서 밑에 있는 컨트랙트 주소로 검색하시면 체인에 배포된 코드를
          투명하게 보실 수 있습니다.
        </p>
        <p>
          컨트랙트 주소: {contract !== undefined ? contract.address : "로딩 중"}
        </p>
      </div>
    </div>
  );
}

export default About;
