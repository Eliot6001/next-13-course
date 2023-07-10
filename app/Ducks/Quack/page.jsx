"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "./styles.css";
import { Modal } from "@/app/components/Modal";
export const metadata = {
  title: "Next app attempt",
  description: "YOU GOT THE QUACKING GOING!!!",
  keywords:
    "ducks, duck friends, ducks being friends, duck companions, duck social behavior, duck bonding, duck community, duck flock, duck friendships, ducks swimming together, ducks playing, duck interaction, duck communication, ducks grooming each other, duck cooperation, duck support, duck loyalty, duck group behavior, duck pairings, duck mates, duck family, duck parenting, duck sibling bonds, duck friendships in the wild, domestic duck friendships, duck empathy",
}; /*Keywords generated using chatGPT */
function Quack() {

  return (
    <>
    <div className="ducks">
      <p className="text-xl">Quack Quack</p>
      <footer className="text-xs mt-auto">
        Photo by{" "}
        <Link href="https://unsplash.com/@chrishcush?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Christian Bowen
        </Link>{" "}
        on{" "}
        <Link href="https://unsplash.com/photos/QKUN1xjwDQA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </Link>
      </footer>
    </div>
    <Modal title={'Quack!'} text={'Quack!'} buttonText={'QUACK!'}></Modal>
    </>
  );
}

export default Quack;
