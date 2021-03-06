const config = {
    style: "mapbox://styles/mapbox/streets-v11",
    accessToken: "pk.eyJ1IjoiZXJpbmJvcmRlcnMiLCJhIjoiY2tmNHF3cGtpMDF1dzJ5cW1hdjF4bTNuZSJ9.FchVASOsoyMYZHcIywqKMg", 
    CSV: "https://docs.google.com/spreadsheets/d/1o1NuCmpCcJ2vLa4HwPGQoZSO82fEl_qweSJ5of_ve_0/gviz/tq?tqx=out:csv&sheet=atlantaBlackBusinesses",
    center: [-84.401, 33.760], //Lng, Lat
    zoom: 10, //Default zoom
    title: "Buy Black",
    description: "Want to support black restaurants? This map has amazing options to try. Filter the list by cuisine and price, or enter your location in the search bar to see restaurants near you. Created by <a style='text-decoration: underline' href='https://www.erinborders.me/'>Erin Borders</a>.",
    sideBarInfo: ["Name", "Offerings", "Price"],
    popupHeader: ["Name"],
    popupDescription: ["Address"],
    filters: [
        // {
        //     type: "dropdown",
        //     title: "Title of filter: ",
        //     columnHeader: "Business Type",
        //     listItems: [
        //         'Restaurant',
        //         'Retail'
        //         // 'filter three',
        //         // 'filter four',
        //         // 'filter five',
        //         // 'filter six',
        //         // 'filter seven'
        //     ]
        // },
        {
            type: "dropdown",
            title: "Cuisine: ",
            columnHeader: "Offerings",
            listItems: [
                'Breakfast',
                'Pizza',
                'Healthy',
                'American',
                'Southern',
                'Caribbean',
                'Ethiopian', 
                'Bar',
                'Seafood',
                'Dessert',
                'BBQ'
            ]
        },
        {
            type: "checkbox",
            title: "Price: ",
            columnHeader: "Price",
            listItems: ["$", "$$", "$$$"]
        }
    ]

};


