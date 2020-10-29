const ThemeOne = ({ customStyle }) => {
    return (
      <div
        style={{
          position: "absolute",
          Index: 100,
          marginTop: 15,
        }}
      >
        <div
          style={{
           background: customStyle.backColor ? customStyle.backColor : "orange",
            display: "flex",
            justifyContent: "center",
            height: 45,
            width: 140,
            margin: "auto",
            marginTop: 60,
            borderRadius: 5,
            flexDirection: "column",
            textAlign: "center",
            position: "relative",
            margin:"80px"
          }}
        >
          <div
            style={{
             color: customStyle.textColor ? customStyle.textColor: "black",
              fontWeight: "800",
              fontSize: 18,
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: -2,
              width: "100%",
            }}
            className="font1"
          >
            
            {customStyle.upperText ? customStyle.upperText : "I Love"}
          </div>
          <div
            style={{
              color: customStyle.textColor ? customStyle.textColor: "black",
              fontWeight: "800",
              fontSize: 18,
              position: "absolute",
              marginBottom: 10,
              top: 18,
              width: "100%",
            }}
            className="font1"
          >
            {customStyle.bottomText ? customStyle.bottomText : "Mojo"}
          </div>
        </div>
      </div>
      
    )
  }
  export default ThemeOne;