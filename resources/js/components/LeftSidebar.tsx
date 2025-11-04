import { User as UserType } from '@/types';
import {
    AiSearch02Icon,
    AllBookmarkIcon,
    HomeIcon,
    Message01Icon,
    MoreHorizontalFreeIcons,
    Notification01Icon,
    UserMultiple02Icon,
} from '@hugeicons/core-free-icons';

import { HugeiconsIcon } from '@hugeicons/react';
import { usePage } from '@inertiajs/react';
import NavItem from './NavItem';

interface LeftSidebarProps {
    unreadCount: number;
    clearUnreadCount: () => void;
}

const LeftSidebar = ({ unreadCount, clearUnreadCount }: LeftSidebarProps) => {
    const { url, props } = usePage<{ auth: { user: UserType } }>();

    return (
        <aside className="sticky top-0 h-screen w-64 p-4">
            <div className="flex h-full flex-col justify-between">
                <div className="mb-4 pl-3 text-2xl font-bold text-blue-500">
                    <img src="/images/zephyr.png" alt="logo" />
                </div>
                <nav className="space-y-2">
                    <NavItem
                        href="/dashboard"
                        active={url === 'dashboard'}
                        icon={
                            <HugeiconsIcon
                                icon={HomeIcon}
                                size={24}
                                color="currentColor"
                            />
                        }
                    >
                        Home
                    </NavItem>

                    <NavItem
                        href="/explore"
                        active={url === 'explore'}
                        icon={
                            <HugeiconsIcon
                                icon={AiSearch02Icon}
                                size={24}
                                color="currentColor"
                            />
                        }
                    >
                        Explore
                    </NavItem>
                    <NavItem
                        href="/notifications"
                        active={url === 'notifications'}
                        icon={
                            <HugeiconsIcon
                                icon={Notification01Icon}
                                size={24}
                                color="currentColor"
                            />
                        }
                    >
                        Notification
                    </NavItem>

                    <NavItem
                        href="/messages"
                        active={url === 'messages'}
                        icon={
                            <HugeiconsIcon
                                icon={Message01Icon}
                                size={24}
                                color="currentColor"
                            />
                        }
                    >
                        Notification
                    </NavItem>

                    <NavItem
                        href="/bookmarks"
                        active={url === 'bookmarks'}
                        icon={
                            <HugeiconsIcon
                                icon={AllBookmarkIcon}
                                size={24}
                                color="currentColor"
                            />
                        }
                    >
                        Bookmarks
                    </NavItem>
                    <NavItem
                        href="/communities"
                        active={url === 'communities'}
                        icon={
                            <HugeiconsIcon
                                icon={UserMultiple02Icon}
                                size={24}
                                color="currentColor"
                            />
                        }
                    >
                        Communities
                    </NavItem>
                    <NavItem
                        href="/profile"
                        active={url === 'profile'}
                        icon={
                            <HugeiconsIcon
                                icon={UserMultiple02Icon}
                                size={24}
                                color="currentColor"
                            />
                        }
                    >
                        Profile
                    </NavItem>
                    <NavItem
                        href="/more"
                        active={url === 'more'}
                        icon={
                            <HugeiconsIcon
                                icon={MoreHorizontalFreeIcons}
                                size={24}
                                color="currentColor"
                            />
                        }
                    >
                        More
                    </NavItem>
                </nav>
            </div>
        </aside>
    );
};
