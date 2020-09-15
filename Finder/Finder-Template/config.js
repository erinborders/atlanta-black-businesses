const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: key,
    CSV: "https://docs.google.com/spreadsheets/d/1o1NuCmpCcJ2vLa4HwPGQoZSO82fEl_qweSJ5of_ve_0/gviz/tq?tqx=out:csv&sheet=atlantaBlackBusinesses",
    center: [-84.401, 33.760], //Lng, Lat
    zoom: 10, //Default zoom
    title: "Buy Black",
    description: "Want to support black companies? You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["Name", "Business Type", "Offerings"],
    popupInfo: ["Name"],
    filters: [
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Business Type",
            listItems: [
                'Restaurant',
                'Retail'
                // 'filter three',
                // 'filter four',
                // 'filter five',
                // 'filter six',
                // 'filter seven'
            ]
        },
        {
            type: "checkbox",
            title: "Price: ",
            columnHeader: "Price",
            listItems: ["$", "$$", "$$$"]
        },
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
        }
    ]

};
