// =======================
// == SIP/VSS Path List ==
// == for h2018         ==
// =======================

// hash for convert from SIP path to VSS path
const g_SIP_VSS_Hash = {
    // == Vehicle Data ==
     'Smartphone.Gps.LocationInf.latitude'        : 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Latitude'    //lat
    ,'Smartphone.Gps.LocationInf.longitude'       : 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Longitude'   //lng
    ,'Smartphone.Gps.LocationInf.altitude'        : 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Altitude'    //alt
    ,'Smartphone.Gps.LocationInf.heading'         : 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Heading'     //head
    ,'Smartphone.Gps.LocationInf.speed'           : 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Speed'       //speed
    ,'Vehicle.RunningStatus.VehicleSpeed.speed'   : 'Signal.Drivetrain.Transmission.Speed'
    ,'Vehicle.RunningStatus.EngineSpeed.speed'    : 'Signal.Drivetrain.InternalCombustionEngine.RPM'
    ,'Vehicle.RunningStatus.SteeringWheel.angle'  : 'Signal.Chassis.SteeringWheel.Angle'
    ,'Vehicle.RunningStatus.AcceleratorPedalPosition.value'     :'Signal.Chassis.Accelerator.PedalPosition' //AccelPedal
    ,'Vehicle.RunningStatus.BrakeOperation.brakePedalDepressed' :'Signal.Chassis.Brake.PedalPosition'       //BrakePedal
    ,'Vehicle.VisionAndParking.ParkingBrake.status'             :'Signal.Chassis.ParkingBrake.IsEngaged'    //ParkingBrake
    ,'CarAdapter.SensorData.Acceleration.x'       : 'Signal.Vehicle.Acceleration.X'    //Accel-x
    ,'CarAdapter.SensorData.Acceleration.y'       : 'Signal.Vehicle.Acceleration.Y'    //Accel-y
    ,'CarAdapter.SensorData.Acceleration.z'       : 'Signal.Vehicle.Acceleration.Z'    //Acdel-z

    ,'CarAdapter.SensorData.Gyro.x'               : 'Signal.Vehicle.Acceleration.Pitch'   //Gyro-x
    ,'CarAdapter.SensorData.Gyro.y'               : 'Signal.Vehicle.Acceleration.Roll'    //Gyro-y
    ,'CarAdapter.SensorData.Gyro.z'               : 'Signal.Vehicle.Acceleration.Yaw'     //Gyro-z

    ,'Vehicle.RunningStatus.Transmission.mode'        :'Signal.Drivetrain.Transmission.Gear'              //Gear
    ,'Vehicle.RunningStatus.Fuel.level'               :'Signal.Drivetrain.FuelSystem.Level'               //FuelLevel
    ,'Vehicle.RunningStatus.Fuel.instantConsumption'  :'Signal.Drivetrain.FuelSystem.instantConsumption'  //instantFuelConsum
    //,'Vehicle.RunningStatus.VehiclePowerModetype.value' :'??'  //VehiclePowerMode e.g. 'running'
    ,'Vehicle.Maintenance.Odometer.distanceTotal'     :'Signal.OBD.DistanceWithMIL'             //distanceTotal

    ,'Vehicle.DrivingSafety.Door.Front.Right.status'  :'Signal.Cabin.Door.Row1.Right.IsOpen'    //Door(f-r)     //Zone項目
    ,'Vehicle.DrivingSafety.Door.Front.Left.status'   :'Signal.Cabin.Door.Row1.Left.IsOpen'     //Door(f-l)     //Zone項目
    ,'Vehicle.DrivintSafety.Seat.Front.Right.seatbelt':'Signal.Cabin.Seat.Row1.Pos1.IsBelted'   //Seatbelt(f-r) //Zone項目

    ,'Vehicle.RunningStatus.LightStatus.head'     :'Signal.Body.Light.IsLowBeamOn'  //HeadLight
    ,'Vehicle.RunningStatus.LightStatus.highbeam' :'Signal.Body.Light.IsLowBeamOn'  //HeadLight
    ,'Vehicle.RunningStatus.LightStatus.brake'    :'Signal.Body.Light.IsBrakeOn'    //BrakeLight
    ,'Vehicle.RunningStatus.LightStatus.parking'  :'Signal.Body.Light.IsParkingOn'  //ParkingLight

    // == Sensor 2018 ==
    // = JINS
    ,'Sensor.Meme.Proc.awk':      'Private.Signal.Driver.Awakeness'// driver awakeness
    ,'Sensor.Meme.Proc.att':      'Private.Signal.Driver.Attentiveness'// driver attentiveness
    ,'Sensor.Meme.Proc.awk_pass': 'Private.Signal.Passenger.Awakeness'// driver awakeness
    ,'Sensor.Meme.Proc.att_pass': 'Private.Signal.Passenger.Attentiveness'// driver attentiveness
    ,'Sensor.Meme.Proc.awk_back': 'Private.Signal.Backseat.Awakeness'// driver awakeness
    ,'Sensor.Meme.Proc.att_back': 'Private.Signal.Backseat.Attentiveness'// driver attentiveness

    // = iPhone/iWatch/Sdtech
    ,'Sensor.Ios.Data.altitude':     'Private.Signal.Driver.Altitude' // Altitude of driver device
    ,'Sensor.Ios.Data.atompressure': 'Signal.OBD.BarometricPressure'
    ,'Sensor.Vital.Data.beat':       'Private.Signal.Driver.Heartrate'
    ,'Sensor.Vital.Data.concent':    'Private.Signal.Driver.Concentration'

    // = MESH
    ,'Sensor.Mesh.Data.temperature': 'Signal.Cabin.HVAC.AmbientAirTemperature'
    ,'Sensor.Mesh.Data.humidity':    'Signal.Cabin.HVAC.AmbientAirHumidity'
    ,'Sensor.Mesh.Data.trunk':       'Signal.Body.Trunk.IsOpen'

    // = Bocco
    ,'Sensor.Bocco.Data.aircon': 'Signal.Cabin.HVAC.IsAirConditioningActive'
    ,'Sensor.Bocco.Data.window': 'Signal.Cabin.Door.Row1.Right.Window.Position'
};

