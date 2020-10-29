
const ThemeFour = ({ customStyle }) => {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: 100,
          marginTop: 15,
        }}
      >
        <div
          style={{
            background: customStyle.backColor ? customStyle.backColor : "yellow",
            display: "flex",
            justifyContent: "center",
            height: 110,
            width: 100,
            borderRadius: 20,
            margin: "100px",
            marginTop: 40,
            flexDirection: "row",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 5px",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: 10,
              width: "100%",
            }}
          >
            <img
              src={
                customStyle.topLogo
                  ? customStyle.topLogo
                  : "https://logodix.com/logo/2019675.jpg"
              }
              height="40px"
            />
          </div>
          <div
            style={{
              color: customStyle.textColor ? customStyle.textColor: "black",
              fontWeight: "800",
              fontSize: 18,
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: 50,
              width: "100%",
            }}
            className="font1"
          >
            {customStyle.topText ? customStyle.topText : "I Love"}
          </div>
          <div
            style={{
              color: customStyle.textColor ? customStyle.textColor: "black",
              fontWeight: "800",
              fontSize: 18,
              position: "absolute",
              marginTop: 10,
              top: 60,
              width: "100%",
            }}
            className="font1"
          >
            {customStyle.bottomText ? customStyle.bottomText : "Poland"}
          </div>
        </div>
      </div>
    )
  }

  export default ThemeFour;