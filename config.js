var config = {
    style: 'mapbox://styles/redeat/ck4ci7atj32xj1co46e90pzno',
    accessToken: 'pk.eyJ1IjoicmVkZWF0IiwiYSI6ImNrNGM0Y3dlaTA3d2Uzbm0wdnR5dW1uaDIifQ.5A8nVnhRnY4ykzOOLNQPzw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            title: '双核阶段（1979－1997）：',
            image: '',
            description: '双核阶段（1979－ 1997）：广州和香港作为2大区域核心，促进邻近城市如深圳和东莞发展。深圳核心区的形成（1998-2008）：中国加入WTO。加上其他政策如土地政策改革、房屋政策改革、使香港经济对深圳的影响有所减弱珠三角（2008-2018）：传统的代工模式出现发展瓶颈，依靠地域在三大都市区（广佛肇、深莞惠、珠中江）启动城市一“大湾区”（2018年至今）：随 体化进程着《粤港澳大湾区发展规划纲要》的发布，大湾区是结合3个大都市区+2个特别行政区，旨在融合不同的政治、经济制度形成一个大型的都市圈',
            location: {
                center: [113.65699, 22.63995],
                zoom: 7.89,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            title: 'Bike Lanes',
            image: '',
            description: '大湾区人口仅占全国的5%却创造了超过12%的GDP。随着未来人口、经济、产业进一步在大湾区聚集、优势将更加明显。同时大湾区存在两种制度，三种货币的特殊环境，大湾区发展面临着机遇、更面临着挑战',
            location: {
                center: [113.65699, 22.63995],
                zoom: 7.89,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            title: 'Indego Bike Share',
            image: '',
            description: '',
            location: {
                center: [113.65699, 22.63995],
                zoom: 7.89,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            title: 'Belmont Plateau Trails',
            image: '',
            description: '大湾区经济发展现状良好，消费升级趋势显现，广州、深圳、香港经济条件优良作为区域中心带动周边城市发展',
            location: {
                center: [113.65699, 22.63995],
                zoom: 7.89,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            title: 'Wissahickon Park Trails',
            image: '',
            description: '大湾区重点交通工程重点为加强珠江东西岸的联系，跨江（海）工程占比超过70%，项目地位于珠江出海口，区位条件优良',
            location: {
                center: [113.65699, 22.63995],
                zoom: 7.89,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            title: 'Pennypack Park Trails',
            image: '',
            description: '大湾区运输结构中，将加大铁路及水路转运份额，南沙港区可通过水运连接泛珠三角城市',
            location: {
                center: [113.65699, 22.63995],
                zoom: 7.89,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
