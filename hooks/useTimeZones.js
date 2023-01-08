export default function useTimeZones() {
  const timeZones = {
    mexico: [
      "America/Mexico_City",
      "America/Monterrey",
      "America/Tijuana",
      "America/Ciudad_Juarez",
      "America/Hermosillo",
      "America/Chihuahua",
      "America/Mazatlan",
      "America/Merida",
    ],
    australia: [
      "Australia/Perth",
      "Australia/Eucla",
      "Australia/Adelaide",
      "Australia/Broken_Hill",
      "Australia/Melbourne",
      "Australia/Sydney",
    ],
    colombia: ["America/Bogota"],
  };

  return [ timeZones ]
}
