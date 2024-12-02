import { useState } from "react";

const FilterData = () => {
  const [query, setQuery] = useState("");
  const pakistaniCities = [
    "Islamabad",
    "Karachi",
    "Lahore",
    "Rawalpindi",
    "Peshawar",
    "Quetta",
    "Multan",
    "Faisalabad",
    "Sialkot",
    "Gujranwala",
    "Sukkur",
    "Abbottabad",
    "Bahawalpur",
    "Sargodha",
    "Mardan",
    "Mirpur Khas",
    "Larkana",
    "Jhelum",
    "Muzaffargarh",
    "Dera Ghazi Khan",
    "Chiniot",
    "Okara",
    "Tando Adam",
    "Haripur",
    "Jacobabad",
    "Khuzdar",
    "Sheikhupura",
    "Nowshera",
    "Kohat",
    "Chitral",
    "Bannu",
    "Swat",
    "Mingora",
    "Mianwali",
    "Havelian",
    "Attock",
    "Kamalia",
    "Toba Tek Singh",
    "Larkana",
    "Kotli",
    "Batkhela",
    "Bhalwal",
    "Wazirabad",
    "Rahim Yar Khan",
    "Kharian",
    "Dera Ismail Khan",
    "Sadiqabad",
    "Badin",
    "Kotli",
  ];

  const filteredCities = pakistaniCities?.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredCities?.length > 0 ? (
        filteredCities?.map((city, index) => <p key={index}>{city}</p>)
      ) : (
        <p>No Cities Found!</p>
      )}
    </div>
  );
};

export default FilterData;
