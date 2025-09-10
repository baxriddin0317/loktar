export function useScrollRestore(key: string) {
  const savedY = useState<number | null>(`scroll:${key}`, () => null)

  function save() {
    savedY.value = window.scrollY
  }

  function restore() {
    if (typeof savedY.value === 'number') {
      window.scrollTo({ top: savedY.value, behavior: 'auto' })
    }
  }

  return { save, restore, savedY }
}

