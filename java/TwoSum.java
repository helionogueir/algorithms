import java.util.Arrays;

class TwoSum {
  public int[] calc(int[] nums, int target) {
      Integer[] metaNums = Arrays.stream(nums)
          .boxed()
          .toArray(Integer[]::new);
      int complement = -1;
      int complementIndice = -1;

      for (int i = 0; i < nums.length; i++) {
          complement = target - nums[i];
          complementIndice = Arrays.asList(metaNums).indexOf(complement);

          if (complementIndice < 0 || i == complementIndice) continue;

          return new int[]{ i, complementIndice };
      }

      return new int[]{};
  }
}
