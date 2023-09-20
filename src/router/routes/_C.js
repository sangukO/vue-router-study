import { useMemberStore } from "@stores";

export default [
    {
        path: "/C",
        name: "C",
        component: "C",
        beforeEnter: (to, from, next) => {
            const member = useMemberStore();
            if (member.currentMember === 3) {
                next();
            } else {
                alert("접근 권한이 없습니다.");
            }
        },
        meta: {
            pageNumber: "3",
        },
    },
];
