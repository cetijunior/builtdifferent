/** MAK Albania — minimal scale proof for BD 3.0 (not a hotel showcase) */

export const venue = {
  name: "MAK Albania Hotel",
  shortName: "MAK Albania",
  address: "Sheshi Italia, Tirana, Albania",
  url: "https://www.makalbania.com/",
  mapsUrl:
    "https://www.google.com/maps/place/MAK+Albania+Hotel/@41.316791,19.8232587,17z",
  scaleLine:
    "1,000+ tickets outgrew the old room. BD 3.0 returns to the five-star address where the movement started — proof the event leveled up, not a hotel tour.",
} as const;

export const venueImages = [
  {
    src: "/assets/venue/exterior-main.jpg",
    alt: "MAK Albania Hotel exterior, Tirana",
  },
  {
    src: "/assets/venue/exterior-park.jpg",
    alt: "MAK Albania beside Tirana National Park",
  },
] as const;
