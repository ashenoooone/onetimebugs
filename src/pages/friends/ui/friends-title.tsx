import { Typography } from '@/shared/ui/typography';
import { cn } from '@/shared/utils';

type Props = {
  className?: string;
  totalFriends?: number | null;
};

export const FriendsTitle = (props: Props) => {
  const { className, totalFriends } = props;

  return (
    <Typography
      variant={'h4'}
      className={cn('font-bold relative leading-[56px]', className)}
    >
      FRIENDS
      <span
        className={cn(
          'text-lg absolute font-normal -top-0 w-max left-[calc(100%+2px)] text-d-gray',
          {
            'text-d-red': !totalFriends,
          },
        )}
      >
        {totalFriends ? totalFriends : 'not found'}
      </span>
    </Typography>
  );
};
