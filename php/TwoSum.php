class TwoSum {

  /**
  * @param Integer[] $nums
  * @param Integer $target
  * @return Integer[]
  */
  public function calc($nums, $target) {
    $complement = -1;
    $complementIndice = -1;

    for ($i = 0; $i < count($nums); $i++) {
        $complement = $target - $nums[$i];
        $complementIndice = array_search($complement, $nums);

        if (is_bool($complementIndice) || $i === $complementIndice) continue;

        return [$i, $complementIndice];
    }

    return [];
  }
}
