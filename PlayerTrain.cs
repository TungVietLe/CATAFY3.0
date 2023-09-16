using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static Cinemachine.DocumentationSortingAttribute;

public class PlayerTrain : MonoBehaviour

{
    public SurfaceEffector2D railEffector;
    public Rigidbody2D trainRigidbody;
    public int maxSpeed = 25;
    public int engineLevel = 0;
    public int brakeStrength = 90;
    public int brakeLevel = 0;

    // Start is called before the first frame update
    void Start()
    {
        railEffector.forceScale = 0;
        railEffector.speed = maxSpeed;
    }

    // Update is called once per frame
    void Update()
    {
        getEngineKey(KeyCode.Alpha0, 0);
        getEngineKey(KeyCode.Alpha1, 1);
        getEngineKey(KeyCode.Alpha2, 2);
        getEngineKey(KeyCode.Alpha3, 3);
        getBrakeKey(KeyCode.Q, 1);
        getBrakeKey(KeyCode.W, 2);
        getBrakeKey(KeyCode.E, 3);
    }
    private void FixedUpdate()
    {
        //engine
        handleEnginePhysic(0, 0);
        handleEnginePhysic(1, 0.0002f);
        handleEnginePhysic(2, 0.0005f);
        handleEnginePhysic(3, 0.001f);

        //brake
        handleBrakePhysic(1, brakeStrength * 0.3f);
        handleBrakePhysic(2, brakeStrength * 0.6f);
        handleBrakePhysic(3, brakeStrength);
        
    }

    void getEngineKey (KeyCode key, int level)
    {
        if (Input.GetKeyDown(key))
        {
            brakeLevel = 0;
            engineLevel = level;
        }
    }
    void handleEnginePhysic(int level, float force)
    {
        if (engineLevel == level)
        {
            railEffector.forceScale = force;
        }
    }

    void getBrakeKey (KeyCode key, int level)
    {
        if (Input.GetKeyDown(key))
        {
            engineLevel = 0;
            brakeLevel = level;
        }
    }

    void handleBrakePhysic(int level, float brakeForce)
    {
        if (brakeLevel == level)
        {
            if (trainRigidbody.velocity.magnitude > 0.1)
            {
                trainRigidbody.AddForce(new Vector2(-brakeForce * Time.deltaTime, 0));
            }
            else
            {
                trainRigidbody.velocity = new Vector2(0, 0);
            }
        }
    }

    //PUBLIC FUNCTIONS
    public void SwitchEngine(int targetEngineLvl)
    {
        brakeLevel = 0;
        if (targetEngineLvl > 3) engineLevel = 3;
        else if (targetEngineLvl < 0) engineLevel = 0;
        else engineLevel= targetEngineLvl;
    }

    public void SwitchBrake(int targetBrakeLvl)
    {
        engineLevel = 0;
        if (targetBrakeLvl > 3) brakeLevel = 3;
        else if (targetBrakeLvl < 0) brakeLevel = 0;
        else brakeLevel = targetBrakeLvl;
    }
}
