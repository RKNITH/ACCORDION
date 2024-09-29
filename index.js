document.addEventListener("DOMContentLoaded", function () {
    const statesAndCapitals = [
        { state: "Andhra Pradesh", capital: "Amaravati" },
        { state: "Arunachal Pradesh", capital: "Itanagar" },
        { state: "Assam", capital: "Dispur" },
        { state: "Bihar", capital: "Patna" },
        { state: "Chhattisgarh", capital: "Raipur" },
        { state: "Goa", capital: "Panaji" },
        { state: "Gujarat", capital: "Gandhinagar" },
        { state: "Haryana", capital: "Chandigarh" },
        { state: "Himachal Pradesh", capital: "Shimla" },
        { state: "Jharkhand", capital: "Ranchi" },
        { state: "Karnataka", capital: "Bengaluru" },
        { state: "Kerala", capital: "Thiruvananthapuram" },
        { state: "Madhya Pradesh", capital: "Bhopal" },
        { state: "Maharashtra", capital: "Mumbai" },
        { state: "Manipur", capital: "Imphal" },
        { state: "Meghalaya", capital: "Shillong" },
        { state: "Mizoram", capital: "Aizawl" },
        { state: "Nagaland", capital: "Kohima" },
        { state: "Odisha", capital: "Bhubaneswar" },
        { state: "Punjab", capital: "Chandigarh" },
        { state: "Rajasthan", capital: "Jaipur" },
        { state: "Sikkim", capital: "Gangtok" },
        { state: "Tamil Nadu", capital: "Chennai" },
        { state: "Telangana", capital: "Hyderabad" },
        { state: "Tripura", capital: "Agartala" },
        { state: "Uttar Pradesh", capital: "Lucknow" },
        { state: "Uttarakhand", capital: "Dehradun" },
        { state: "West Bengal", capital: "Kolkata" }
    ];

    const accordionContainer = document.getElementById('accordion');

    statesAndCapitals.forEach((item, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const accordionHeader = document.createElement('div');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.textContent = item.state;
        accordionHeader.setAttribute('data-index', index);

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.textContent = `Capital: ${item.capital}`;

        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionBody);
        accordionContainer.appendChild(accordionItem);

        // Toggle accordion open/close
        accordionHeader.addEventListener('click', function () {
            const isActive = accordionHeader.classList.contains('active');

            // Close all other accordion items
            document.querySelectorAll('.accordion-header').forEach(header => {
                header.classList.remove('active');
            });
            document.querySelectorAll('.accordion-body').forEach(body => {
                body.style.display = 'none';
            });

            // Toggle the current one
            if (!isActive) {
                accordionHeader.classList.add('active');
                accordionBody.style.display = 'block';
            }
        });
    });
});
