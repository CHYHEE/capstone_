    const options = [
        {
            options: ['그렇다', '아니다'],
        },
    ];

    const questionsMBTI = [
        {
            question: "1. 주기적으로 새로운 친구를 만든다.",
            YES: "E",
            No: "I"
        },
        {
            question: "2. 자유 시간 중 상당 부분을 다양한 관심사를 탐구하는 데 할애한다.",
            YES: "S",
            No: "N"
        },
        {
            question: "3. 다른 사람이 울고 있는 모습을 보면 자신도 울고 싶어질 때가 많다.",
            YES: "T",
            No: "F"
        },
        {
            question: "4. 일이 잘못될 때를 대비해 여러 대비책을 세우는 편이다.",
            YES: "J",
            No: "P"
        },
        {
            question: "5. 압박감이 심한 환경에서도 평정심을 유지하는 편이다.",
            YES: "T",
            No: "F"
        },
        {
            question: "6. 파티나 행사에서 새로운 사람에게 먼저 자신을 소개하기보다는 주로 이미 알고 있는 사람과 대화하는 편이다.",
            YES: "E",
            No: "I"
        },
        {
            question: "7. 하나의 프로젝트를 완전히 완료한 후 다른 프로젝트를 시작하는 편이다.",
            YES: "J",
            No: "P"
        },
        {
            question: "8. 매우 감상적인 편이다.",
            YES: "T",
            No: "F"
        },
        {
            question: "9. 일정이나 목록으로 계획을 세우는 일을 좋아한다.",
            YES: "J",
            No: "P"
        },
        {
            question: "10. 작은 실수로도 자신의 능력이나 지식을 의심하곤 한다.",
            YES: "T",
            No: "F"
        },
        {
            question: "11. 관심이 가는 사람에게 다가가서 대화를 시작하기가 어렵지 않다.",
            YES: "E",
            No: "I"
        },
        {
            question: "12. 예술 작품의 다양한 해석에 대해 토론하는 일에는 크게 관심이 없다.",
            YES: "S",
            No: "N"
        },
        {
            question: "13. 감정보다는 이성을 따르는 편이다.",
            YES: "T",
            No: "F"
        },
        {
            question: "14. 하루 일정을 계획하기보다는 즉흥적으로 하고 싶은 일을 하는 것을 좋아한다.",
            YES: "J",
            No: "P"
        },
        {
            question: "15. 다른 사람에게 자신이 어떤 사람으로 보일지 걱정하지 않는 편이다.",
            YES: "E",
            No: "I"
        },
        {
            question: "16. 단체 활동에 참여하는 일을 즐긴다.",
            YES: "E",
            No: "I"
        },
        {
            question: "17. 결말을 자신의 방식으로 해석할 수 있는 책과 영화를 좋아한다.",
            YES: "S",
            No: "N"
        },
        {
            question: "18. 자신보다는 남의 성공을 돕는 일에서 더 큰 만족감을 느낀다.",
            YES: "T",
            No: "F"
        },
        {
            question: "19. 관심사가 너무 많아 다음에 어떤 일을 해야 할지 모를 때가 있다.",
            YES: "S",
            No: "N"
        },
        {
            question: "20. 일이 잘못될까봐 자주 걱정하는 편이다.",
            YES: "J",
            No: "P"
        },
        {
            question: "21. 단체에서 지도자 역할을 맡는 일은 가능한 피하고 싶다.",
            YES: "E",
            No: "I"
        },
        {
            question: "22. 자신에게 예술적 성향이 거의 없다고 생각한다.",
            YES: "S",
            No: "N"
        },
        {
            question: "23. 사람들이 감정보다는 이성을 중시했다면 더 나은 세상이 되었으리라고 생각한다.",
            YES: "T",
            No: "F"
        },
        {
            question: "24. 휴식을 취하기 전에 집안일을 먼저 끝내기를 원한다.",
            YES: "J",
            No: "P"
        },
        {
            question: "25. 다른 사람의 논쟁을 바라보는 일이 즐겁다.",
            YES: "T",
            No: "F"
        },
        {
            question: "26. 다른 사람의 주의를 끌지 않으려고 하는 편이다.",
            YES: "E",
            No: "I"
        },
        {
            question: "27. 감정이 매우 빠르게 변하곤 한다.",
            YES: "T",
            No: "F"
        },
        {
            question: "28. 자신만큼 효율적이지 못한 사람을 보면 짜증이 난다.",
            YES: "S",
            No: "N"
        },
        {
            question: "29. 해야 할 일을 마지막까지 미룰 때가 많다.",
            YES: "J",
            No: "P"
        },
        {
            question: "30. 사후세계에 대한 질문이 흥미롭다고 생각한다.",
            YES: "S",
            No: "N"
        },
        {
            question: "31. 혼자보다는 다른 사람과 시간을 보내고 싶어한다.",
            YES: "E",
            No: "I"
        },
        {
            question: "32. 이론 중심의 토론에는 관심이 없으며 원론적인 이야기는 지루하다고 생각한다.",
            YES: "S",
            No: "N"
        },
        {
            question: "33. 자신과 배경이 완전히 다른 사람에게도 쉽게 공감할 수 있다.",
            YES: "T",
            No: "F"
        },
        {
            question: "34. 결정을 내리는 일을 마지막까지 미루는 편이다.",
            YES: "J",
            No: "P"
        },
        {
            question: "35. 이미 내린 결정에 대해서는 다시 생각하지 않는 편이다.",
            YES: "S",
            No: "N"
        },
        {
            question: "36. 혼자만의 시간을 보내기보다는 즐거운 파티와 행사로 일주일의 피로를 푸는 편이다.",
            YES: "E",
            No: "I"
        },
        {
            question: "37. 미술관에 가는 일을 좋아한다.",
            YES: "S",
            No: "N"
        },
        {
            question: "38. 다른 사람의 감정을 이해하기 힘들 때가 많다.",
            YES: "T",
            No: "F"
        },
        {
            question: "39. 매일 할 일을 계획하는 일을 좋아한다.",
            YES: "J",
            No: "P"
        },
        {
            question: "40. 불안함을 느낄 때가 거의 없다.",
            YES: "S",
            No: "N"
        },
        {
            question: "41. 전화 통화를 거는 일은 가능한 피하고 싶다.",
            YES: "E",
            No: "I"
        },
        {
            question: "42. 자신의 의견과 매우 다른 의견을 이해하기 위해 많은 시간을 할애하곤 한다.",
            YES: "T",
            No: "F"
        },
        {
            question: "43. 친구에게 먼저 만나자고 연락하는 편이다.",
            YES: "E",
            No: "I"
        },
        {
            question: "44. 계획에 차질이 생기면 최대한 빨리 계획으로 돌아가기 위해 노력한다.",
            YES: "J",
            No: "P"
        },
        {
            question: "45. 오래전의 실수를 후회할 때가 많다.",
            YES: "S",
            No: "N"
        },
        {
            question: "46. 인간의 존재와 삶의 이유에 대해 깊이 생각하지 않는 편이다.",
            YES: "S",
            No: "N"
        },
        {
            question: "47. 감정을 조절하기보다는 감정에 휘둘리는 편이다.",
            YES: "T",
            No: "F"
        },
        {
            question: "48. 상대방의 잘못이라는 것이 명백할 때도 상대방의 체면을 살려주기 위해 노력한다.",
            YES: "T",
            No: "F"
        },
        {
            question: "49. 계획에 따라 일관성 있게 업무를 진행하기보다는 즉흥적인 에너지로 업무를 몰아서 처리하는 편이다.",
            YES: "J",
            No: "P"
        },
        {
            question: "50. 상대방이 자신을 높게 평가하면 나중에 상대방이 실망하게 될까 걱정하곤 한다.",
            YES: "S",
            No: "N"
        },
        {
            question: "51. 대부분의 시간을 혼자서 일할 수 있는 직업을 원한다.",
            YES: "E",
            No: "I"
        },
        {
            question: "52. 철학적인 질문에 대해 깊게 생각하는 일은 시간 낭비라고 생각한다.",
            YES: "S",
            No: "N"
        },
        {
            question: "53. 조용하고 사적인 장소보다는 사람들로 붐비고 떠들썩한 장소를 좋아한다.",
            YES: "E",
            No: "I"
        },
        {
            question: "54. 상대방의 감정을 바로 알아차릴 수 있다.",
            YES: "T",
            No: "F"
        },
        {
            question: "55. 무엇인가에 압도당하는 기분을 느낄 때가 많다.",
            YES: "S",
            No: "N"
        },
        {
            question: "56. 단계를 건너뛰는 일 없이 절차대로 일을 완수하는 편이다.",
            YES: "J",
            No: "P"
        },
        {
            question: "57. 논란이 되거나 논쟁을 불러일으킬 수 있는 주제에 관심이 많다.",
            YES: "T",
            No: "F"
        },
        {
            question: "58. 자신보다 다른 사람에게 더 필요한 기회라고 생각되면 기회를 포기할 수도 있다.",
            YES: "T",
            No: "F"
        },
        {
            question: "59. 마감 기한을 지키기가 힘들다.",
            YES: "J",
            No: "P"
        },
        {
            question: "60. 일이 원하는 대로 진행될 것이라는 자신감이 있다.",
            YES: "J",
            No: "P"
        }
    ]
export { options, questionsMBTI };
