const people = [
    {
        id: 0,
        name: 'BossBoxing',
        sizeDick: 56,
        imgUrl: 'https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/116720623_2665781890352750_8092927111783884284_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEAcaDjB60iM7i9VGnQJyJ0jCkSLD6KN9yMKRIsPoo33B8Igt_YsT1HKz7SWeaAacd85KqhxRzu4TJSivZvdb30&_nc_ohc=gIXW3dB5ePYAX_t14wf&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfBpoP5tb2irpWpdgs5rAb91TZq2kgvJURuMILGxbpEO-g&oe=64AE9535',
    },
    {
        id: 1,
        name: 'BillyForce',
        sizeDick: 49,
        imgUrl: 'https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/317303143_2769249743211953_9183093381111071413_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHDFc5w2fe4EtVDKauysah9EKIksZdHNYYQoiSxl0c1hnSMuj2L2T5dbZN97lbksnK6MhTGn7s_65G3WBric73S&_nc_ohc=MM_g13j8zRcAX8-JZDc&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfB35jvb7Ev28Jwgz7NhcvtNwdzGes__Fw6vr7I9OcYaHw&oe=648CDED4',
    },
    {
        id: 2,
        name: 'Impossible',
        sizeDick: 49,
        imgUrl: 'https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/346086465_1297863007821667_9033168054361049081_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHHtluNZ0Vdz5UxhnJuPDGimRSk1FoA1H2ZFKTUWgDUfeASLaPdyH-PxnRYq4VMrMPGwel7zGrtB-5w60fuFVew&_nc_ohc=aY14VD6xCPMAX9j3xCx&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfDTFCzOnzDhrR9P6BUFiC2MyjzNXzOl5FzxOZ557aaFEw&oe=648B087C',
    },
    {
        id: 4,
        name: 'ETCx',
        sizeDick: 49,
        imgUrl: 'https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/119177474_2045443588921451_5996644114844328512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGPTIWEfgFfjSk1uCIg3WWerlha637IX1yuWFrrfshfXIcqDjJwRcTWOQMIWcg5m7tY_DQNVYx0ytmHwsps6mLP&_nc_ohc=IplzYRh4ljAAX8Q9cZU&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfD8HRdnP1x7uk1Oi2O2Enrbwq6GoOBX8dRkRiR9Gsagaw&oe=64AE7E8A',
    },
    {
        id: 5,
        name: 'DionPalm',
        sizeDick: 49,
        imgUrl: 'https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/274264952_3578921642334243_583362622062588529_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGyFKmrWkaq6fHDk3fDkwD0P3yi6Z2AiZw_fKLpnYCJnITBUyOGUSwFALjxz56f9-W8wsz9J1Q_3aU4oJhDFeQ9&_nc_ohc=Ko3499f5_oMAX-NKKhO&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCxi2Yo4RCAc5Ll8QWCewx8cHFpA9h8-0k6_bxu8cRZ9w&oe=648BE5C0',
    },
];

const bigPeople = people.filter(
    people => people.sizeDick > 49
)

const listPeoples = people.map(a =>
    <div className="flex space-x-4 card rounded-none m-5">
        <li>
            <div>
                <img
                    src={a.imgUrl}
                    alt={a.name}
                    width={100}
                    height={50}
                    className="rounded"
                />
                Name: {a.name} <br />
                Dick Size: {a.sizeDick}
            </div>
        </li>
    </div>
)

export default function PeopleList() {
    return (
        <>
            <div>
                <ul>{listPeoples}</ul>
            </div>
        </>
    );
}
