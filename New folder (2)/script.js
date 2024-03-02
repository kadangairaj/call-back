// Define callback functions for timer
function step1(callback) {
    setTimeout(function() {
        console.log("Step 1 completed.");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(function() {
        console.log("Step 2 completed.");
        callback();
    }, 2000);
}

function step3(callback) {
    setTimeout(function() {
        console.log("Step 3 completed.");
        callback();
    }, 3000);
}

function step4(callback) {
    setTimeout(function() {
        console.log("Step 4 completed.");
        callback();
    }, 4000);
}

// Start the timer
step1(function() {
    step2(function() {
        step3(function() {
            step4(function() {
                console.log("Timer completed.");
            });
        });
    });
});
