function calculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365;

    const age = Math.floor(ageInYears);
    document.getElementById("result").textContent = `Your age is approximately ${age} years.`;
}