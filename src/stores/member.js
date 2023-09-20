import { defineStore } from "pinia";

export const useMemberStore = defineStore("memberStore", {
    state: () => {
        return {
            currentMember: 0,
            list: [
                {
                    id: 0,
                    grade: "비회원",
                    animal: [
                        {
                            name: "강아지",
                            url: "https://i.namu.wiki/i/slmFMXb1Fchs2zN0ZGOzqfuPDvhRS-H9eBp7Gp613-DNKi6i6Ct7eFkTUpauqv5HAYR97mrNqrvvcCDEyBdL_g.webp",
                        },
                        {
                            name: "고양이",
                            url: "https://i.namu.wiki/i/abZPxKt_L98I8ttqw56pLHtGiR5pAV4YYmpR3Ny3_n0yvff5IDoKEQFof7EbzJUSZ_-uzR5S7tzTzGQ346Qixw.webp",
                        },
                    ],
                },
                {
                    id: 1,
                    grade: "A 회원",
                    animal: [
                        {
                            name: "강아지",
                            url: "https://i.namu.wiki/i/slmFMXb1Fchs2zN0ZGOzqfuPDvhRS-H9eBp7Gp613-DNKi6i6Ct7eFkTUpauqv5HAYR97mrNqrvvcCDEyBdL_g.webp",
                        },
                        {
                            name: "사자",
                            url: "https://i.namu.wiki/i/Z_ZVhoecXf6pbIK_6Wf44j8Xnqp0KvruhN2-TOjNdcEyFFqnpX2gIHI9c3pqYj3xQbf2xKYNTPRG3MyrMYkisg.webp",
                        },
                    ],
                },
                {
                    id: 2,
                    grade: "B 회원",
                    animal: [
                        {
                            name: "고양이",
                            url: "https://i.namu.wiki/i/abZPxKt_L98I8ttqw56pLHtGiR5pAV4YYmpR3Ny3_n0yvff5IDoKEQFof7EbzJUSZ_-uzR5S7tzTzGQ346Qixw.webp",
                        },
                        {
                            name: "토끼",
                            url: "https://i.namu.wiki/i/d4W_IbUYmI_l_ONbMMSSWSUFdR3Nve5_eozU5NCeYp8VMLStp0IpeCJU7s1r3RxplGjV17_3-USTjjToCa0awQ.webp",
                        },
                    ],
                },
                {
                    id: 3,
                    grade: "VIP 회원",
                    animal: [
                        {
                            name: "사자",
                            url: "https://i.namu.wiki/i/Z_ZVhoecXf6pbIK_6Wf44j8Xnqp0KvruhN2-TOjNdcEyFFqnpX2gIHI9c3pqYj3xQbf2xKYNTPRG3MyrMYkisg.webp",
                        },
                        {
                            name: "토끼",
                            url: "https://i.namu.wiki/i/d4W_IbUYmI_l_ONbMMSSWSUFdR3Nve5_eozU5NCeYp8VMLStp0IpeCJU7s1r3RxplGjV17_3-USTjjToCa0awQ.webp",
                        },
                    ],
                },
            ],
        };
    },
    getters: {
        printUserData() {
            return this.list.filter((x) => x.id === this.currentMember)[0];
        },
    },
    actions: {
        changeMember(id) {
            this.currentMember = id;
        },
    },
});
