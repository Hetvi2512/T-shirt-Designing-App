
import logo from './logo.png'
const ThemeThree = ({ customStyle }) => {
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
            display: "flex",
            justifyContent: "center",
            height: 150,
            width: 300,
            borderRadius: 50,
            margin: "90px",
            marginTop: 50,
            flexDirection: "column",
            textAlign: "center",
            position: "relative",
          }}
        >
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
          
            <div
              style={{
                height: 200,
                width: 100,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <img
                src={"https://pbs.twimg.com/media/DzNLs_dX4AAaYmX.png"}
                 src={customStyle.rightLogo ? customStyle.rightLogo : logo}
              
                height="130px"
                width="100px"
              />
            </div>
          </div>
          
        </div>
      </div>
    )
  }
export default ThemeThree;  