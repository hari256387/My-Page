// Age Calculator
function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const today = new Date();
    const birthDate = new Date(birthdate);
    
    if (isNaN(birthDate)) {
        alert("Please enter a valid date.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    document.getElementById('ageResult').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}


