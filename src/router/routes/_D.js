import { useMemberStore } from "@stores";

export default [
    {
        path: "/D",
        name: "D",
        component: "D",
        beforeEnter: (to, from, next) => {
            const member = useMemberStore();
            if (member.currentMember === 0) {
                next();
            } else {
                alert("접근 권한이 없습니다.");
            }
        },
        meta: {
            pageNumber: "4",
        },
    },
];
