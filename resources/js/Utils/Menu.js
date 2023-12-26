const MenuDashboard = [
    {
        role: "staff",
        menu: [
            {
                name: "Manage Property",
                url: "/manage_property",
                icon: "fas fa-home",
            },
            {
                name: "Back to Front Page",
                url: "/",
                icon: "fas fa-pager",
            }
        ],

    },
    {
        role: "marketing",
        menu: [
            {
                name: "Manage Customer Order" ,
                url: "/admin/article",
                icon: "fas fa-users",
            },
            {
                name: "Back to Front Page",
                url: "/",
                icon: "fas fa-pager",
            }
        ],
    },
    {
        role: "pimpinan",
        menu: [
            {
                name: "Sales Report",
                url: "/admin",
                icon: "fas fa-chart-line",
            },
            {
                name: "Back to Front Page",
                url: "/",
                icon: "fas fa-pager",
            }
        ],
    }
];

export default MenuDashboard;
