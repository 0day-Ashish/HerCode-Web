import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          // center the expanded menu box horizontally and keep it auto-width,
          // also center its children so icons sit inside the rounded background
          <motion.div
            layoutId="nav"
            className="absolute left-1/2 bottom-full mb-2 flex w-auto -translate-x-1/2 flex-col items-center gap-2 p-2 dark:bg-black/20 dark:border-neutral-800"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/5 dark:bg-black/10 dark:border-neutral-800"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 border border-white/10  dark:bg-black/20 dark:border-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  // track vertical mouse position for a vertical dock
  let mouseY = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        // vertical dock: hidden on small, visible on md+, translucent white bg with blur
        "mx-auto hidden flex-col items-center gap-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/10 p-3 md:flex dark:bg-black/20 dark:border-neutral-800 ",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
}: {
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  // distance from mouse to the center of this icon vertically
  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  // reduce range and max scale to avoid jerky jumps
  let widthTransform = useTransform(distance, [-120, 0, 120], [44, 64, 44]);
  let heightTransform = useTransform(distance, [-120, 0, 120], [44, 64, 44]);

  let widthTransformIcon = useTransform(distance, [-120, 0, 120], [20, 36, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-120, 0, 120],
    [20, 36, 20],
  );

  // soften spring for smoother motion (less stiffness, more damping)
  let width = useSpring(widthTransform, {
    mass: 0.6,
    stiffness: 90,
    damping: 18,
  });
  let height = useSpring(heightTransform, {
    mass: 0.6,
    stiffness: 90,
    damping: 18,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.6,
    stiffness: 90,
    damping: 18,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.6,
    stiffness: 90,
    damping: 18,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: 8 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 2, x: 8 }}
              className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
