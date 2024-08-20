import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";
import React, { useCallback } from "react";
import { gameStore } from "../model/game.store";

type GameResultModalProps = {
  className?: string;
  reward: number;
  open: boolean;
};

export const GameResultModal = React.memo((props: GameResultModalProps) => {
  const { className, reward, open } = props;
  const setGameStatus = gameStore.use.setGameStatus();

  const onOpenChange = useCallback((open: boolean) => {
    if (!open) {
      window.location.reload();
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-h-72 flex flex-col justify-between">
        <div className="my-2">
          <Typography variant={"h5"} className="text-center">
            Your reward is{" "}
            <span className="font-bold text-special-green">{reward} DUCKS</span>
          </Typography>
        </div>
        <Button onClick={() => onOpenChange(false)} className="w-full ">
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
});

GameResultModal.displayName = "GameResultModal";
