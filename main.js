let show = document.querySelector("#show");

let day =  document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let second = document.querySelector("#second");

        function different() {
            let today1 = new Date();
            let afterdate = new Date('2023-04-14 12:00:00 AM');
            let timeDiff = afterdate.getTime() - today1.getTime();
            let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            let hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minsDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            let secsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);

            day.innerHTML = daysDiff;
            hours.innerHTML = hoursDiff;
            minutes.innerHTML = minsDiff;
            second.innerHTML = secsDiff;
        }

        setInterval(different, 1000);

