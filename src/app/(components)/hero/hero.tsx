import { Button, Typography } from "@mui/material";
import { SquareUserRound } from "lucide-react";
import Image from "next/image";
import React from 'react'

const Hero = () => {
  return (
      <section
      className="bg-no-repeat bg-cover h-2/4 px-12 py-9" 
      style={{backgroundImage: `url(/assets/background.png)`}}
      >
        <div className="flex flex-col gap-5 items-center md:flex-row md:justify-between ">
          <div className="w-64 h-56">
            <Image src="/assets/warframe.svg" alt="warframe" width={100} height={100} />
          </div>

          <div className="w-full md:w-60 flex justify-between items-center gap-5 md:flex-col">
            <Typography variant="body1" justifyContent={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint est libero laudantium, nesciunt expedita!
            </Typography>

            <Button variant="contained" 
             startIcon={<SquareUserRound />}
             className="bg-[#336285b2] text-gray-50 w-[90%] px-8 py-2 flex items-center hover:bg-[#336285a1] rounded-2xl">
              Contact
            </Button>
          </div>
        </div>
      </section>
  )
}

export default Hero