import { useMemberStore } from "@stores";

export default [
    {
        path: "/B",
        name: "B",
        component: "B",

        meta: {
            pageNumber: "2",
        },
    },
    {
        path: "/B/:id",
        name: "Bn",
        component: "B",
        beforeEnter: (to, from, next) => {
            const member = useMemberStore();

            if (member.currentMember !== 0 && member.currentMember !== 3) {
                next();
            } else {
                alert("접근 권한이 없습니다.");
            }
        },
        meta: {
            pageNumber: "2",
        },
    },
];
