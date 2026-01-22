export const getPaginationRange = (
    current: number,
    total: number,
    siblingCount = 1
) => {
    const totalPageNumbers = siblingCount * 2 + 5

    if (totalPageNumbers >= total) {
        return Array.from({ length: total }, (_, i) => i + 1)
    }

    const leftSiblingIndex = Math.max(current - siblingCount, 1)
    const rightSiblingIndex = Math.min(current + siblingCount, total)

    const showLeftDots = leftSiblingIndex > 2
    const showRightDots = rightSiblingIndex < total - 1

    const pages: (number | 'dots')[] = []

    pages.push(1)

    if (showLeftDots) pages.push('dots')

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        if (i !== 1 && i !== total) pages.push(i)
    }

    if (showRightDots) pages.push('dots')

    if (total !== 1) pages.push(total)

    return pages
};