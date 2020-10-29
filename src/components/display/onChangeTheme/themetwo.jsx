
const ThemeTwo = ({ customStyle }) => {
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
            background: customStyle.backColor ? customStyle.backColor : "orange",
            display: "flex",
            justifyContent: "center",
            height: 90,
            width: 90,
            borderRadius: 50,
            margin: "100px",
            marginTop: 35,
            flexDirection: "column",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              color: customStyle.textColor ? customStyle.textColor: "black",
              fontWeight: "800",
              fontSize: 16,
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: 20,
              width: "100%",
            }}
            className="font1"
          >
            {customStyle.uppertext ? customStyle.uppertext : "I Love"}
          </div>
          <div
            style={{
              color: customStyle.textColor ? customStyle.textColor: "black",
              fontWeight: "800",
              fontSize: 16,
              position: "absolute",
              marginTop: 10,
              width: "100%",
            }}
            className="font1"
          >
            {customStyle.bottomtext ? customStyle.bottomtext : "Mojo"}
          </div>
        </div>
      </div>
    )
  }
export default ThemeTwo;  