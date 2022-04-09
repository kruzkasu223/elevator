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

          <div className={floor.isElevatorThere ? "elevator-door active" : "elevator-door"}></div>

          <div className="btn-wrap">
            <button className="btn btn-up">&uarr;</button>
            <button className="btn btn-down">&darr;</button>
          </div>

        </div>
      ))}
    </div>
  )
}