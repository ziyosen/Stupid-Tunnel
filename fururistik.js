<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Vless | LuckyZP | CloudFlare</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4C+6PCWJ+8zzHcXQjXGp6n5Yh9rX0x5fOdPaOqO+e2X4R5C1aE/BSqPIG+8y3O6APa8w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="https://raw.githubusercontent.com/AFRcloud/BG/main/icons8-film-noir-80.png" type="image/png">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

        body {
            margin: 0;
            padding: 0;
            font-family: 'Orbitron', sans-serif;
            color: #e0e0e0;
            background-color: #111;
            display: flex;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
            overflow: hidden;
            position: relative;
        }

        .container {
            max-width: 1200px;
            width: 100%;
            margin: 20px;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            animation: fadeIn 1s ease-in-out;
            overflow-y: auto;
            max-height: 100vh;
            border-radius: 15px;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: -1;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .header {
            text-align: center;
            margin-top: 30px;
            margin-bottom: 40px;
        }

        .header h1 {
            font-size: 48px;
            color: transparent;
            background-image: linear-gradient(45deg, #00ffcc, #00ccff, #ff00ff, #ffcc00);
            -webkit-background-clip: text;
            background-clip: text;
            margin: 0;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 6px;
            text-shadow: 0px 0px 10px rgba(255,255,255,0.8), 0px 0px 20px rgba(0,255,255,0.7);
        }

        .nav-buttons {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 30px;
            gap: 15px;
        }

        .nav-buttons .button {
            border: 2px solid transparent;
            color: #e0e0e0;
            padding: 8px 20px;
            font-size: 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 2px;
            background: linear-gradient(45deg, #00ffcc, #00ccff, #ff00ff, #ffcc00);
            background-size: 400% 400%;
            animation: rainbowAnimation 4s ease infinite;
            box-shadow: 0px 0px 15px rgba(0,255,255,0.5);
        }

        .nav-buttons .button:hover {
            transform: scale(1.1);
            background-position: 100% 100%;
            color: white;
        }

        @keyframes rainbowAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .content {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }

        .content.active {
            display: block;
            opacity: 1;
        }

        .config-section {
            background: rgba(0, 0, 0, 0.6);
            padding: 20px;
            margin: 10px;
            border-radius: 10px;
            border: 2px solid transparent;
            border-image: linear-gradient(45deg, #00ffcc, #ff00ff, #ffcc00) 1;
            animation: slideIn 0.5s ease-in-out;
        }

        @keyframes slideIn {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        .config-section h3 {
            margin-top: 0;
            color: transparent;
            background-image: linear-gradient(45deg, #00ffcc, #00ccff, #ff00ff, #ffcc00);
            -webkit-background-clip: text;
            background-clip: text;
            font-size: 28px;
        }

        .config-section p {
            color: #e0e0e0;
            font-size: 16px;
        }

        .config-toggle {
            margin-bottom: 10px;
            cursor: pointer;
            color: #00ffcc;
        }

        .config-content {
            display: none;
        }

        .config-content.active {
            display: block;
        }

        .config-block {
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.4);
            transition: background-color 0.3s ease;
        }

        .config-block h4 {
            margin-bottom: 8px;
            color: transparent;
            background-image: linear-gradient(45deg, #00ffcc, #ff00ff, #ffcc00);
            -webkit-background-clip: text;
            background-clip: text;
            font-size: 22px;
            font-weight: 600;
        }

        .config {
            background-color: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 5px;
            border: 2px solid transparent;
            border-image: linear-gradient(45deg, #00ffcc, #ff00ff, #ffcc00) 1;
            color: #e0e0e0;
            word-wrap: break-word;
            white-space: pre-wrap;
            font-family: 'Courier New', Courier, monospace;
            font-size: 15px;
        }

        .watermark {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.6);
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            font-weight: bold;
            text-align: center;
        }

        .watermark a {
            color: transparent;
            background-image: linear-gradient(45deg, #00ffcc, #ff00ff, #ffcc00);
            -webkit-background-clip: text;
            background-clip: text;
            text-decoration: none;
            font-weight: bold;
        }

        .watermark a:hover {
            color: transparent;
            background-image: linear-gradient(45deg, #00ffcc, #ff00ff, #ffcc00);
            -webkit-background-clip: text;
            background-clip: text;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 32px;
            }

            .config-section h3 {
                font-size: 24px;
            }

            .config-block h4 {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="overlay"></div>
    <div class="container">
        <div class="header">
            <h1>Vless | LuckyZP | CloudFlare</h1>
        </div>

        <div class="nav-buttons">
            <button class="button">Get Started</button>
            <button class="button">Settings</button>
            <button class="button">Contact</button>
        </div>

        <div class="content">
            <div class="config-section">
                <h3>Configuration</h3>
                <p>Set up your Vless connection in seconds.</p>
                <div class="config-block">
                    <h4>Endpoint</h4>
                    <div class="config">vless://example.com</div>
                </div>
                <div class="config-block">
                    <h4>Protocol</h4>
                    <div class="config">VLESS</div>
                </div>
            </div>
        </div>

        <div class="watermark">
            <p>Powered by <a href="#">LuckyZP</a></p>
        </div>
    </div>
</body>
</html>
