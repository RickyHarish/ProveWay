document.addEventListener("DOMContentLoaded", function () {
    function selectBundle(element, bundleNumber) {
        document.querySelectorAll('.bundle-option').forEach(option => {
            option.classList.remove('expanded');
            let dropdowns = option.querySelector('.dropdowns');
            if (dropdowns) {
                dropdowns.style.display = "none";
            }
        });

        element.classList.add('expanded');
        let dropdowns = element.querySelector('.dropdowns');
        if (dropdowns) {
            dropdowns.style.display = "block";
        }

        updateTotalPrice(bundleNumber);
    }

    function updateTotalPrice(bundleNumber) {
        let priceMapping = {
            1: "$10.00 USD",
            2: "$18.00 USD",
            3: "$24.00 USD"
        };
        document.getElementById("total-price").innerText = priceMapping[bundleNumber];
    }

    document.querySelectorAll('.bundle-option').forEach(option => {
        option.addEventListener("click", function () {
            selectBundle(this, this.getAttribute("onclick").match(/\d+/)[0]);
        });
    });
});
