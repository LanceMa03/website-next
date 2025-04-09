'use client';

import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});


export default function KoreanPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center py-13 px-6 w-full h-full {backgroundColor: rgb(25, 27, 28))}">

            <a className="absolute top-2 left-2 w-fit text-sm text-gray-50 px-3 py-1 rounded-lg shadow-md hover:bg-zinc-700 transition " href="https://lance-ma-website.vercel.app//#aboutme">
                ← Back
            </a>
            
            <div className={`max-w-[69rem] w-full mx-auto flex flex-col items-center ${notoSansKR.className} `}>

                <div className="text-center text-2xl font-semibold mb-5 text-white">
                    혼자 여행의 매력
                </div>

                <div className="flex flex-col mr-auto mb-2 text-base text-white">
                    <div>
                        <strong>이름:</strong> 랑스 마
                    </div>
                    
                    <div>
                        <strong>날짜:</strong> 2025년 3월 29일
                    </div>
                </div>
                
                <div className="mt-5 text-white text-lg">

                    <div className="mb-4">
                    여러분은 여행을  많이 해 보셨어요? 근데 혼자 여행은 해본 적이 있습니까? 지난 3년 동안 저는 혼자 여행을 많이 다녔고, 그 경험을 통해 많은 것을 배울 수 있었습니다. 혼자 여행하는 것은 자기 자신을 발견할 수 있는 기회입니다. 원하는 속도로 여행할 수 있기 때문에 새로운 것을 시도할 수 있습니다. 

                    </div>

                    <div className="mb-4">
                    일단, 혼자 여행하면 새로운 경험할 수 있는 기회가 많습니다. 생소한 환경을 경험하고 평소에 하지 않는 활동도 할 수 있습니다.  이런 경험들은 나를 더 성장하게 만들고 여행의  즐거움 더해 줍니다.  
                    </div>

                    <div className="mb-4">
                    또한, 혼자 여행을 하면 자신에 대해 더 깊이 알게 됩니다. 새로운 환경에서 다양한 감정을 경험하고, 예상하지 못한 관심도 발견할 수 도 있습니다. 교실에서 배우는 것과 달리, 여행을 통해 직접 부딪히고 경험하면서 내가 좋아하는 것과 싫어하는 것을 더 깊이 이해할 수 있습니다. 예를 들어, 처음 혼자 식당에서 식사했을 때는 어색했고 정말 싫었지만, 혼자 여행 더 하면서 점점이 익숙해졌어요. 
                    </div>

                    <div className="mb-4">
                    저의 첫 혼자 여행은 시카고였지만 제가 가장 최근의 혼자 한 여행은 보스턴이었습니다. 보스턴에서는 다양한 음식과 문화를 경험했 습니다. 가장 기억에 남는 순간은 공항 가는 배에서 물 위로 보이는 스카이라인을 보는 것 이었습니다. 이 처럼 혼자 여행을 하면서 새로운 경험했고, 그 과정에서 여러 가지를 배웠습니다. 
                    </div>

                    <div className="mb-4">
                    혼자 하는 여행을 통해 저는 자신에 대해 더 알게 되었고 새로운 관점에서 세상을 볼 수 있게 됐습니다. 예를 들어, 저는 도시의 활기찬 분위기도 좋아하지만, 조용한 산책이나 여유로운 시간을 보내는 것도 좋아하는 것도 알게 됐습니다. 혼자 여행은 처음 들으면 조금 무섭지만, 해보면 생각보다 재밌습니다. 그래서 여러분들도 시간 있으면 용기 내고 혼자 하는 여행을 해보세요. 그 여행의 즐거움에  빠지게 될 것입니다!
                    </div>

                    <div className="text-xs text-center mt-5 text-gray-400 italic">
                     Runner Up for Purdue&apos;s 2025 Korean Speech Contest
                    </div>
                    
                </div>
                

            </div>
        </div>
    )
}