# A2 Apartment - 360° Panoramic View

## 🏢 Project Overview

A2 is an interactive 360° panoramic virtual tour of an apartment located in Queen Towers, Erbil, Iraq. This project provides an immersive experience allowing users to explore the apartment's interior spaces through high-quality panoramic photography.

## 🌟 Features

- **Interactive 360° Panoramas**: Navigate through multiple rooms and spaces
- **Multiple Viewpoints**: Explore different angles and perspectives in each room
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Intuitive controls for panning, zooming, and scene switching
- **Auto-rotation**: Optional automatic rotation for hands-free viewing
- **Fullscreen Mode**: Immersive viewing experience

## 🏠 Available Spaces

The virtual tour includes the following areas:

1. **Kitchen** - Modern kitchen with appliances and dining area
2. **Hall** - Main entrance and hallway
3. **Balcony Edition View** - Outdoor balcony with city views
4. **Balcony** - Additional balcony space
5. **Room** - Standard bedroom
6. **Bathroom** - Main bathroom facilities
7. **Master Bathroom** - En-suite master bathroom
8. **Master Room** - Primary bedroom suite
9. **Balcony** - Additional outdoor space

## 🛠️ Technology Stack

- **Marzipano**: 360° panorama viewer library
- **HTML5/CSS3**: Modern web standards
- **JavaScript**: Interactive functionality
- **Responsive Design**: Mobile-first approach

## 🚀 Live Demo

Visit the live demo: [A2 Apartment Virtual Tour](https://abdalkaderdev.github.io/A2/)

## 📱 How to Use

1. **Navigation**: Use mouse/touch to drag and explore the panorama
2. **Zoom**: Use scroll wheel or pinch gestures to zoom in/out
3. **Scene Switching**: Click on room names in the sidebar to switch between spaces
4. **Auto-rotation**: Toggle the play button for automatic rotation
5. **Fullscreen**: Click the fullscreen button for immersive viewing

## 🏗️ Project Structure

```
A2/
├── index.html          # Main application file
├── index.js            # Application logic
├── data.js             # Scene and panorama data
├── style.css           # Styling and layout
├── img/                # UI icons and images
├── tiles/              # Panoramic image tiles
│   ├── 0-kitchen/      # Kitchen panorama tiles
│   ├── 1-hall/         # Hall panorama tiles
│   ├── 2-balcony-edition-view/
│   ├── 3-balcony/
│   ├── 4-room/
│   ├── 5-bathroom/
│   ├── 6-master-bathroom/
│   ├── 7-master-room/
│   └── 8-balcony/
└── vendor/             # Third-party libraries
    ├── marzipano.js    # Panorama viewer
    ├── bowser.min.js   # Browser detection
    └── screenfull.min.js # Fullscreen API
```

## 📍 Location

**Queen Towers, Erbil, Iraq**

This virtual tour showcases an apartment in the prestigious Queen Towers development, offering a glimpse into modern living spaces in Erbil's vibrant cityscape.

## 🎯 Use Cases

- **Real Estate**: Virtual property tours for potential buyers/renters
- **Interior Design**: Showcase design and layout concepts
- **Marketing**: Interactive property presentations
- **Documentation**: Visual record of apartment features and condition

## 🔧 Development

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdalkaderdev/A2.git
   cd A2
   ```

2. Open `index.html` in a web browser or serve locally:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Visit `http://localhost:8000` in your browser

### Customization

- **Add New Scenes**: Modify `data.js` to include additional panoramic scenes
- **Update Images**: Replace tiles in the `tiles/` directory with new panoramic images
- **Styling**: Customize appearance by editing `style.css`

## 📄 License

This project is open source and available under the [MIT License](LICENSE.txt).

## 👨‍💻 Author

**Abdalkaderdev** - [GitHub Profile](https://github.com/Abdalkaderdev)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please open an issue on GitHub or contact the developer.

---

*Experience the future of virtual property tours with A2 Apartment's immersive 360° panoramic view.* 