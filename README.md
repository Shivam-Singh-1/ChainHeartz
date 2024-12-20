# ChainHeartz
This project is a **decentralized donation tracker** that allows users to donate cryptocurrency to various causes and track all donations in real-time. The goal is to create a transparent and easy-to-use platform where users can support charitable initiatives using cryptocurrencies like ETH. Every donation is logged and displayed for transparency, simulating blockchain-like behavior.
---

## 📜 Features

- **Donation Tracking**: Users can donate to selected charity causes through ETH.
- **Transparency**: All donations, including amounts and causes, are displayed in real-time.
- **Withdrawal**: The owner or the Admin can withdraw all of the money by typing in the correct password.
- **Simulated Blockchain**: Each donation is assigned a unique transaction ID, mimicking how blockchain donations are tracked.
- **Real-Time Updates**: The total donations and recent donation list update automatically upon new contributions.

--- 

## 🛠️ Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling and layout.
- **JavaScript**: Handles the donation logic and dynamic updates to the user interface.

---

## 🚀 How to Run Locally

### Prerequisites

To run the project locally, you'll need:

- A web browser (Google Chrome, Firefox, etc.)
- A simple web server like **Live Server** (for VS Code) or **Python HTTP server**.

### Steps to Set Up

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/crypto-donation-tracker.git
   cd crypto-donation-tracker
   ```

2. **Open the project**:
   - Open the `index.html` file in a browser, or
   - Serve it using a local server like **Live Server** in VS Code or:
   ```bash
   # If you have Python installed
   python -m http.server 8000
   ```

3. **View in Browser**:
   - Open `http://localhost:8000` in your browser to see the project in action.

---


## 📂 Project Structure

```plaintext
.
├── index.html      # The main HTML file that contains the structure of the donation page.
├── styles.css      # Contains all the styles for the project.
├── causes.html     # Contains html file for charity cause page.
├── app.js          # JavaScript logic for donations and real-time updates.
└── README.md       # Documentation for the project.
```

---

## 🌟 Usage Instructions

1. Select a **cause** from the dropdown list.
2. Enter the amount of **ETH** you want to donate.
3. Click on **Donate Now** to register your donation.
4. Your donation will appear in the **Recent Donations** list, including:
   - The cause.
   - The amount donated.
   - A unique transaction ID (simulated).
   - The timestamp of the donation.
5. Watch the **Total Donations** update in real time!

---

## 💡 Future Improvements

- **Blockchain Integration**: Integrate with **Ethereum** or **Polygon** testnets using **Web3.js** and **HardHat** to enable real crypto donations.
- **Smart Contract Deployment**: Deploy a smart contract to handle real-time donation tracking on-chain.
- **Multiple Cryptocurrencies**: Support additional tokens and cryptocurrencies for donations.
- **Charity Verification**: Implement a system to verify and audit charities on the platform for increased trust.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or bug fixes, feel free to open an issue or submit a pull request.

---

### Let's make crypto donations **transparent**, **trustworthy**, and **impactful**! 🌍
