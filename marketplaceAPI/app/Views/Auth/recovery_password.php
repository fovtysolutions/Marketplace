<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recovery Password</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <script>
        $(document).ready(function() {
            var url = window.location.pathname;
            var recoveryCode = url.substring(url.lastIndexOf('/') + 1);

            $.ajax({
                url: '/recovery_password/' + recoveryCode,
                type: 'GET',
                success: function(response) {
                    if (response.status === 'success') {
                        window.location.href = response.fronturl;
                    } else if (response.status === 'error') {
                        window.location.href = response.fronturl;
                    }
                },
                error: function() {
                    console.error("An error occurred during the request.");
                }
            });
        });
    </script>
</body>
</html>
