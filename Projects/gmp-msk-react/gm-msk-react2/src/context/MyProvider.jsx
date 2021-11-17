import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = (props) => {
  const siteData = [
    {
      releases: [
        {
          albumName: "Journey to the Centre of the Earth",
          url: "https://gmpmsk.bandcamp.com/album/journey-to-the-centre-of-the-earth",
        },
        {
          albumName: "Journey to the Centre of the Earth2222222",
          url: "https://gmpmsk.bandcamp.com/album/journey-to-the-centre-of-the-earth",
        },
        {
          albumName: "Journey to the Centre of the Earth",
          url: "https://gmpmsk.bandcamp.com/album/journey-to-the-centre-of-the-earth",
        },
        {
          albumName: "Journey to the Centre of the Earth2222222",
          url: "https://gmpmsk.bandcamp.com/album/journey-to-the-centre-of-the-earth",
        },
        {
          albumName: "Journey to the Centre of the Earth",
          url: "https://gmpmsk.bandcamp.com/album/journey-to-the-centre-of-the-earth",
        },
        {
          albumName: "Journey to the Centre of the Earth2222222",
          url: "https://gmpmsk.bandcamp.com/album/journey-to-the-centre-of-the-earth",
        },
      ],
    },
    {
      album: {
        id: "001",
        albumName: "Journey to the Centre of the Earth",
        url: "https://gmpmsk.bandcamp.com/album/journey-to-the-centre-of-the-earth",
        image: "https://f4.bcbits.com/img/a3900475499_10.jpg",
        tracks: [
          {
            id: "01",
            trackName: "Journey to the Centre of the Earth",
            url: "https://gmpmsk.bandcamp.com/track/journey-to-the-centre-of-the-earth",
          },
          {
            id: "02",
            trackName: "Intrepid Explorers",
            url: "https://gmpmsk.bandcamp.com/track/intrepid-explorers",
          },
          {
            id: "03",
            trackName: "entrance to the tunnel",
            url: "https://gmpmsk.bandcamp.com/track/entrance-to-the-tunnel",
          },
          {
            id: "04",
            trackName: "Underground cavern",
            url: "https://gmpmsk.bandcamp.com/track/underground-cavern",
          },
          {
            id: "05",
            trackName: "the mantel",
            url: "https://gmpmsk.bandcamp.com/track/the-mantel",
          },
          {
            id: "06",
            trackName: "abandoned mine",
            url: "https://gmpmsk.bandcamp.com/track/abandoned-mine",
          },
          {
            id: "07",
            trackName: "indigenous underground species",
            url: "https://gmpmsk.bandcamp.com/track/indigenous-underground-species",
          },
          {
            id: "08",
            trackName: "oceanic crust",
            url: "https://gmpmsk.bandcamp.com/track/oceanic-crust",
          },
          {
            id: "09",
            trackName: "inner core",
            url: "https://gmpmsk.bandcamp.com/track/inner-core",
          },
          {
            id: "10",
            trackName: "5​.​515 g​/​cm3",
            url: "https://gmpmsk.bandcamp.com/track/5515-g-cm3",
          },
          {
            id: "11",
            trackName: "schiehallion experiment",
            url: "https://gmpmsk.bandcamp.com/track/schiehallion-experiment",
          },
          {
            id: "12",
            trackName: "lehmann discontinuity",
            url: "https://gmpmsk.bandcamp.com/track/lehmann-discontinuity",
          },
          {
            id: "13",
            trackName: "siderolphile elements",
            url: "https://gmpmsk.bandcamp.com/track/siderolphile-elements",
          },
          {
            id: "14",
            trackName: "seismic noise",
            url: "https://gmpmsk.bandcamp.com/track/seismic-noise",
          },
        ],
      },
    },
    {
      album: {
        id: "002",
        albumName: "Journey to the Centre of the Earth2",
        url: "https://gmpmsk.bandcamp.com/album/journey-to-the-centre-of-the-earth",
        image: "https://f4.bcbits.com/img/a3900475499_10.jpg",
        tracks: [
          {
            id: "01",
            trackName: "Journey to the Centre of the Earth",
            url: "https://gmpmsk.bandcamp.com/track/journey-to-the-centre-of-the-earth",
          },
          {
            id: "02",
            trackName: "Intrepid Explorers",
            url: "https://gmpmsk.bandcamp.com/track/intrepid-explorers",
          },
          {
            id: "03",
            trackName: "entrance to the tunnel",
            url: "https://gmpmsk.bandcamp.com/track/entrance-to-the-tunnel",
          },
          {
            id: "04",
            trackName: "Underground cavern",
            url: "https://gmpmsk.bandcamp.com/track/underground-cavern",
          },
          {
            id: "05",
            trackName: "the mantel",
            url: "https://gmpmsk.bandcamp.com/track/the-mantel",
          },
          {
            id: "06",
            trackName: "abandoned mine",
            url: "https://gmpmsk.bandcamp.com/track/abandoned-mine",
          },
          {
            id: "07",
            trackName: "indigenous underground species",
            url: "https://gmpmsk.bandcamp.com/track/indigenous-underground-species",
          },
          {
            id: "08",
            trackName: "oceanic crust",
            url: "https://gmpmsk.bandcamp.com/track/oceanic-crust",
          },
          {
            id: "09",
            trackName: "inner core",
            url: "https://gmpmsk.bandcamp.com/track/inner-core",
          },
          {
            id: "10",
            trackName: "5​.​515 g​/​cm3",
            url: "https://gmpmsk.bandcamp.com/track/5515-g-cm3",
          },
          {
            id: "11",
            trackName: "schiehallion experiment",
            url: "https://gmpmsk.bandcamp.com/track/schiehallion-experiment",
          },
          {
            id: "12",
            trackName: "lehmann discontinuity",
            url: "https://gmpmsk.bandcamp.com/track/lehmann-discontinuity",
          },
          {
            id: "13",
            trackName: "siderolphile elements",
            url: "https://gmpmsk.bandcamp.com/track/siderolphile-elements",
          },
          {
            id: "14",
            trackName: "seismic noise",
            url: "https://gmpmsk.bandcamp.com/track/seismic-noise",
          },
        ],
      },
    },
  ];
  const USER = process.env.REACT_APP_USER;
  const PASSWORD = process.env.REACT_APP_PASSWORD;
  const [form, setForm] = useState({ user: "", password: "" });
  const [auth, setAuth] = useState(false);
  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.user === USER && form.password === PASSWORD
      ? setAuth(true)
      : setAuth(false);
    setForm({ user: "", password: "" });
  };

  

  return (
    <MyContext.Provider
      value={{ form, handleFormInput, handleFormSubmit, auth, siteData }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
