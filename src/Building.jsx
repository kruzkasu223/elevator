export const Building = () => {
  let building = [
    {
      id: 1,
      isElevatorThere: false
    },
    {
      id: 2,
      isElevatorThere: false
    },
    {
      id: 3,
      isElevatorThere: false
    },
    {
      id: 4,
      isElevatorThere: true
    },
    {
      id: 5,
      isElevatorThere: false
    },
    {
      id: 6,
      isElevatorThere: false
    },
  ]

  return (
    <div className="building">
      {building.reverse().map((floor) => (
        <div className="floor">

          <div className={floor.isElevatorThere ? "elevator-door active" : "elevator-door"}>
            {floor.isElevatorThere &&
              <div className="btn-wrap-ele">
                {building.map(f => (
                  <button className={f.isElevatorThere ? "btn btn-ele active" : "btn btn-ele"}>{f.id}</button>
                ))}
              </div>
            }
          </div>

          <div className="btn-wrap">
            <button className={floor.id === 2 ? "btn active" : "btn"}>&uarr;</button>
            <button className="btn">&darr;</button>
          </div>

        </div>
      ))}
    </div>
  )
}