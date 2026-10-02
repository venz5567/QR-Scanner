 function onScanSuccess(decodedText, decodedResult) {
            document.getElementById('result').innerHTML = `
                <h3>Hasil Scan:</h3>
                <p>${decodedText}</p>
            `;
        }

        let html5QrcodeScanner = new Html5QrcodeScanner(
            "reader", { fps: 10, qrbox: 250 }
        );
        html5QrcodeScanner.render(onScanSuccess);