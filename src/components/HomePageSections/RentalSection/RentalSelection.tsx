import { useState, useRef, useEffect } from "react";
import carIcon from "../../../assets/fi_9610434.svg";
import pinPickupIcon from "../../../assets/Frame76.svg";
import pinDropoffIcon from "../../../assets/fi_14910621.svg";
import calendarIcon from "../../../assets/fi_12516022.svg";
import downArrow from "../../../assets/Down_Arrow_3_.png";
import rightArrow from "../../../assets/right-arrow.png";

import type { CarOption, RentalTabType, TripType, AirportDirectionType } from "../../../types/rental.type";
import { availableCars, airportList, popularCities } from "../../../constants/rental.constant";

const RentalSelection = () => {
    const [activeTab, setActiveTab] = useState<RentalTabType>("car");
    const [selectedCar, setSelectedCar] = useState<CarOption | null>(null);
    const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);
    const [tripType, setTripType] = useState<TripType>("oneWay");
    const [airportDirection, setAirportDirection] = useState<AirportDirectionType>("fromAirport");

    const [pickupLocation, setPickupLocation] = useState("");
    const [dropoffLocation, setDropoffLocation] = useState("");
    const [selectedAirport, setSelectedAirport] = useState(airportList[0]);
    const [isAirportDropdownOpen, setIsAirportDropdownOpen] = useState(false);
    const [dateTime, setDateTime] = useState(() => {
        const now = new Date();
        now.setHours(now.getHours() + 2);
        const mm = String(now.getMonth() + 1).padStart(2, "0");
        const dd = String(now.getDate()).padStart(2, "0");
        const yyyy = now.getFullYear();
        let hours = now.getHours();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const hh = String(hours).padStart(2, "0");
        return `${mm}/${dd}/${yyyy} ${hh}:00 ${ampm}`;
    });
    const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const carDropdownRef = useRef<HTMLDivElement>(null);
    const airportDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (carDropdownRef.current && !carDropdownRef.current.contains(e.target as Node)) {
                setIsCarDropdownOpen(false);
            }
            if (airportDropdownRef.current && !airportDropdownRef.current.contains(e.target as Node)) {
                setIsAirportDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleContinue = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!selectedCar) {
            newErrors.car = "Please select a car type.";
        }

        if (activeTab === "car") {
            if (!pickupLocation.trim()) {
                newErrors.pickup = "Please enter pickup location.";
            }
            if (!dropoffLocation.trim()) {
                newErrors.dropoff = "Please enter drop-off location.";
            }
        } else {
            if (airportDirection === "fromAirport" && !dropoffLocation.trim()) {
                newErrors.dropoff = "Please enter drop-off location.";
            }
            if (airportDirection === "fromHome" && !pickupLocation.trim()) {
                newErrors.pickup = "Please enter pickup location.";
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSubmissionMessage(null);
            return;
        }

        setErrors({});
        const mode = activeTab === "car" ? `Car Rental (${tripType})` : `Airport Rental (${airportDirection})`;
        setSubmissionMessage(`Trip searching for ${selectedCar?.name} with ${mode}. Finding drivers...`);
    };

    return (
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-5 sm:p-7 md:p-9 relative z-20">
            {/* Top Tabs */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6 sm:mb-8">
                <button
                    type="button"
                    onClick={() => {
                        setActiveTab("car");
                        setErrors({});
                        setSubmissionMessage(null);
                    }}
                    className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                        activeTab === "car"
                            ? "bg-[#0e52ff] text-white shadow-md shadow-blue-500/20"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                        <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C86.6 62.6 118.5 40 154.2 40l181.5 0c35.7 0 67.7 22.6 79.5 56.3l35.2 100.5c23.2 6.8 38.8 29 38.8 54.5l0 178c0 14.7-11.9 26.7-26.7 26.7l-21.3 0c-14.7 0-26.7-11.9-26.7-26.7l0-21.3-261.3 0 0 21.3c0 14.7-11.9 26.7-26.7 26.7L46.7 456c-14.7 0-26.7-11.9-26.7-26.7l0-178c0-25.5 15.6-47.7 38.8-54.5zM80 304a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm320 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                    </svg>
                    <span>Car Rental</span>
                </button>

                <button
                    type="button"
                    onClick={() => {
                        setActiveTab("airport");
                        setErrors({});
                        setSubmissionMessage(null);
                    }}
                    className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                        activeTab === "airport"
                            ? "bg-[#0e52ff] text-white shadow-md shadow-blue-500/20"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 576 512">
                        <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265 459.5c-4.9 7.4-13.2 11.8-22.1 11.9l-38.6 .5c-11.9 .1-21.9-9.1-22.7-21c-1.3-19.1 7.2-37.4 22.8-49.3L275.6 320l-106.9 0-41.9 44.5c-4.9 5.2-11.8 8.2-19 8.2l-23.7 0c-11.6 0-20.9-9.7-20.4-21.3c.7-16.7 8.3-32.3 21.2-43.1L120.2 272l-83 0c-11.6 0-20.9-9.7-20.4-21.3c.7-16.7 8.3-32.3 21.2-43.1L75.4 176 120.2 176c-13-10.8-20.5-26.4-21.2-43.1c-.5-11.6 8.8-21.3 20.4-21.3l23.7 0c7.2 0 14.1 3 19 8.2l41.9 44.5 106.9 0L204.4 83.4c-15.6-11.9-24.1-30.2-22.8-49.3c.8-11.9 10.8-21.1 22.7-21l38.6 .5c8.9 .1 17.2 4.5 22.1 11.9L365.7 192l116.6 0z" />
                    </svg>
                    <span>Airport Rental</span>
                </button>
            </div>

            <form onSubmit={handleContinue}>
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* 1. Choose a Car */}
                    <div className="flex flex-col relative" ref={carDropdownRef}>
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
                            <img src={carIcon} alt="" className="w-5 h-5 object-contain" />
                            <span>Choose a Car <span className="text-red-500">*</span></span>
                        </label>

                        <button
                            type="button"
                            onClick={() => setIsCarDropdownOpen((prev) => !prev)}
                            className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 min-h-[52px] hover:border-[#0e52ff] focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-left cursor-pointer"
                        >
                            {selectedCar ? (
                                <div className="flex items-center gap-3">
                                    <img
                                        src={selectedCar.image}
                                        alt={selectedCar.name}
                                        className="h-7 w-auto object-contain"
                                    />
                                    <div>
                                        <div className="font-semibold text-xs text-slate-800 leading-tight">
                                            {selectedCar.name}
                                        </div>
                                        <div className="text-[11px] text-slate-400">
                                            {selectedCar.seat}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <span className="text-sm text-slate-400 font-medium">Select Car Type</span>
                            )}
                            <img src={downArrow} alt="" className="w-3.5 h-auto object-contain opacity-70" />
                        </button>

                        {/* Car Dropdown Menu */}
                        {isCarDropdownOpen && (
                            <div className="absolute top-[82px] left-0 right-0 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-50 max-h-72 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
                                {availableCars.map((car) => (
                                    <button
                                        type="button"
                                        key={car.id}
                                        onClick={() => {
                                            setSelectedCar(car);
                                            setIsCarDropdownOpen(false);
                                            setErrors((prev) => ({ ...prev, car: "" }));
                                        }}
                                        className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-blue-50 transition-colors text-left cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={car.image}
                                                alt={car.name}
                                                className="w-12 h-8 object-contain"
                                            />
                                            <div>
                                                <div className="text-sm font-semibold text-slate-800">
                                                    {car.name}
                                                </div>
                                                <div className="text-xs text-slate-400">{car.seat}</div>
                                            </div>
                                        </div>
                                        {selectedCar?.id === car.id && (
                                            <span className="text-[#0e52ff] font-bold text-sm">✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                        {errors.car && <span className="text-xs text-red-500 mt-1">{errors.car}</span>}
                    </div>

                    {/* 2. Pickup Location (or Airport if Airport Rental and From Airport) */}
                    {activeTab === "airport" && airportDirection === "fromAirport" ? (
                        <div className="flex flex-col relative" ref={airportDropdownRef}>
                            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
                                <img src={pinPickupIcon} alt="" className="w-5 h-5 object-contain" />
                                <span>Pickup Airport <span className="text-red-500">*</span></span>
                            </label>
                            <button
                                type="button"
                                onClick={() => setIsAirportDropdownOpen((prev) => !prev)}
                                className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 min-h-[52px] hover:border-[#0e52ff] focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-left cursor-pointer"
                            >
                                <span className="text-xs sm:text-sm font-medium text-slate-800 truncate">
                                    {selectedAirport}
                                </span>
                                <img src={downArrow} alt="" className="w-3.5 h-auto object-contain opacity-70 ml-2" />
                            </button>
                            {isAirportDropdownOpen && (
                                <div className="absolute top-[82px] left-0 right-0 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-50 max-h-60 overflow-y-auto">
                                    {airportList.map((airport) => (
                                        <button
                                            type="button"
                                            key={airport}
                                            onClick={() => {
                                                setSelectedAirport(airport);
                                                setIsAirportDropdownOpen(false);
                                            }}
                                            className="w-full px-4 py-2.5 text-xs sm:text-sm hover:bg-blue-50 text-left transition-colors font-medium text-slate-700"
                                        >
                                            {airport}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
                                <img src={pinPickupIcon} alt="" className="w-5 h-5 object-contain" />
                                <span>Pickup Location <span className="text-red-500">*</span></span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter Pickup Location"
                                    value={pickupLocation}
                                    onChange={(e) => {
                                        setPickupLocation(e.target.value);
                                        setErrors((prev) => ({ ...prev, pickup: "" }));
                                    }}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 min-h-[52px] text-sm text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:border-[#0e52ff] focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                                {pickupLocation && (
                                    <button
                                        type="button"
                                        onClick={() => setPickupLocation("")}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs px-1"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            {errors.pickup && <span className="text-xs text-red-500 mt-1">{errors.pickup}</span>}
                        </div>
                    )}

                    {/* 3. Drop-off Location (or Airport if Airport Rental and From Home) */}
                    {activeTab === "airport" && airportDirection === "fromHome" ? (
                        <div className="flex flex-col relative" ref={airportDropdownRef}>
                            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
                                <img src={pinDropoffIcon} alt="" className="w-5 h-5 object-contain" />
                                <span>Drop-off Airport <span className="text-red-500">*</span></span>
                            </label>
                            <button
                                type="button"
                                onClick={() => setIsAirportDropdownOpen((prev) => !prev)}
                                className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 min-h-[52px] hover:border-[#0e52ff] focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-left cursor-pointer"
                            >
                                <span className="text-xs sm:text-sm font-medium text-slate-800 truncate">
                                    {selectedAirport}
                                </span>
                                <img src={downArrow} alt="" className="w-3.5 h-auto object-contain opacity-70 ml-2" />
                            </button>
                            {isAirportDropdownOpen && (
                                <div className="absolute top-[82px] left-0 right-0 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-50 max-h-60 overflow-y-auto">
                                    {airportList.map((airport) => (
                                        <button
                                            type="button"
                                            key={airport}
                                            onClick={() => {
                                                setSelectedAirport(airport);
                                                setIsAirportDropdownOpen(false);
                                            }}
                                            className="w-full px-4 py-2.5 text-xs sm:text-sm hover:bg-blue-50 text-left transition-colors font-medium text-slate-700"
                                        >
                                            {airport}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
                                <img src={pinDropoffIcon} alt="" className="w-5 h-5 object-contain" />
                                <span>Drop-off Location <span className="text-red-500">*</span></span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter Drop-off Location"
                                    value={dropoffLocation}
                                    onChange={(e) => {
                                        setDropoffLocation(e.target.value);
                                        setErrors((prev) => ({ ...prev, dropoff: "" }));
                                    }}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 min-h-[52px] text-sm text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:border-[#0e52ff] focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                                {dropoffLocation && (
                                    <button
                                        type="button"
                                        onClick={() => setDropoffLocation("")}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs px-1"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            {errors.dropoff && <span className="text-xs text-red-500 mt-1">{errors.dropoff}</span>}
                        </div>
                    )}

                    {/* 4. Pickup Date & Time */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
                            <img src={calendarIcon} alt="" className="w-5 h-5 object-contain" />
                            <span>Pickup Date & Time <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="MM/DD/YYYY 00:00 PM"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 min-h-[52px] text-sm text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:border-[#0e52ff] focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                    </div>
                </div>

                {/* Popular city suggestions helper pills */}
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-slate-400 font-medium">Quick suggestions:</span>
                    {popularCities.slice(0, 4).map((city) => (
                        <button
                            key={city}
                            type="button"
                            onClick={() => {
                                if (!pickupLocation) setPickupLocation(city);
                                else setDropoffLocation(city);
                            }}
                            className="text-[11px] bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#0e52ff] px-2.5 py-1 rounded-full border border-slate-200 transition-colors"
                        >
                            + {city}
                        </button>
                    ))}
                </div>

                {/* Bottom Row: Radios + Continue Button */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    {activeTab === "car" ? (
                        <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
                            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700 select-none">
                                <input
                                    type="radio"
                                    name="tripType"
                                    value="oneWay"
                                    checked={tripType === "oneWay"}
                                    onChange={() => setTripType("oneWay")}
                                    className="w-4 h-4 text-[#0e52ff] accent-[#0e52ff] focus:ring-blue-500"
                                />
                                <span>One Way</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700 select-none">
                                <input
                                    type="radio"
                                    name="tripType"
                                    value="roundWay"
                                    checked={tripType === "roundWay"}
                                    onChange={() => setTripType("roundWay")}
                                    className="w-4 h-4 text-[#0e52ff] accent-[#0e52ff] focus:ring-blue-500"
                                />
                                <span>Round Way</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700 select-none">
                                <input
                                    type="radio"
                                    name="tripType"
                                    value="hourly"
                                    checked={tripType === "hourly"}
                                    onChange={() => setTripType("hourly")}
                                    className="w-4 h-4 text-[#0e52ff] accent-[#0e52ff] focus:ring-blue-500"
                                />
                                <span>Hourly</span>
                            </label>
                        </div>
                    ) : (
                        <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
                            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700 select-none">
                                <input
                                    type="radio"
                                    name="airportDirection"
                                    value="fromAirport"
                                    checked={airportDirection === "fromAirport"}
                                    onChange={() => setAirportDirection("fromAirport")}
                                    className="w-4 h-4 text-[#0e52ff] accent-[#0e52ff] focus:ring-blue-500"
                                />
                                <span>From Airport</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700 select-none">
                                <input
                                    type="radio"
                                    name="airportDirection"
                                    value="fromHome"
                                    checked={airportDirection === "fromHome"}
                                    onChange={() => setAirportDirection("fromHome")}
                                    className="w-4 h-4 text-[#0e52ff] accent-[#0e52ff] focus:ring-blue-500"
                                />
                                <span>From Home</span>
                            </label>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="theme-primary-btn group !w-full md:!w-auto !justify-between"
                    >
                        <span>Continue</span>
                        <img
                            src={rightArrow}
                            alt=""
                            className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>
                </div>

                {submissionMessage && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 text-[#0e52ff] rounded-xl text-sm font-medium animate-in fade-in">
                        ✓ {submissionMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default RentalSelection;
