document.addEventListener('DOMContentLoaded', function() {
    const infoCard = document.getElementById('info-card');
    infoCard.addEventListener('click', function(event) {
        infoCard.classList.add('clicked');
        event.stopPropagation();
    });

    document.addEventListener('click', function() {
        infoCard.classList.remove('clicked');
    });

    const nameDivButton = document.querySelector('.info-card .name-div button');
    nameDivButton.addEventListener('click', function(event) {
        const textToCopy = 'Java Edition Server 1.21.4';
        navigator.clipboard.writeText(textToCopy).then(function() {
            showCopyStatus(nameDivButton.previousElementSibling, 'Copied');
        }).catch(function(err) {
            showCopyStatus(nameDivButton.previousElementSibling, 'Failed to copy');
            console.error('Could not copy text: ', err);
        });
        event.stopPropagation();
    });

    const addressDivButton = document.querySelector('.info-card .address-div button');
    addressDivButton.addEventListener('click', function(event) {
        const textToCopy = 'pretty-terminology.joinmc.link';
        navigator.clipboard.writeText(textToCopy).then(function() {
            showCopyStatus(addressDivButton.previousElementSibling, 'Copied');
        }).catch(function(err) {
            showCopyStatus(addressDivButton.previousElementSibling, 'Failed to copy');
            console.error('Could not copy text: ', err);
        });
        event.stopPropagation();
    });

    function showCopyStatus(label, message) {
        label.classList.add('hide-label');
        setTimeout(() => {
            label.textContent = message;
            label.classList.remove('hide-label');
            label.classList.add('show-status');
            setTimeout(() => {
                label.classList.remove('show-status');
                label.classList.add('hide-label');
                setTimeout(() => {
                    label.textContent = label.dataset.defaultText;
                    label.classList.remove('hide-label');
                }, 300); // Delay to allow hide transition
            }, 2000);
        }, 300); // Delay to allow hide transition
    }
});
