"use client";

type LessonCompleteProps = {
  completed: boolean;
};

export default function LessonComplete({
  completed,
}: LessonCompleteProps) {
  return (
    <section className="mt-12 rounded-xl border border-white/10 bg-[#101B15] p-8">
      <h2 className="text-2xl font-bold text-green-300">
        Lesson Progress
      </h2>

      {completed ? (
        <div className="mt-6 rounded-lg border border-green-600 bg-green-900/40 p-4">
          <p className="font-semibold text-green-300">
            ✅ Lesson Completed
          </p>

          <p className="mt-2 text-sm text-green-200">
            Congratulations! You passed this lesson's Knowledge Check.
          </p>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-yellow-700 bg-yellow-900/20 p-4">
          <p className="font-semibold text-yellow-300">
            Knowledge Check Required
          </p>

          <p className="mt-2 text-sm text-yellow-200">
            Pass the quiz above to complete this lesson and unlock your progress.
          </p>
        </div>
      )}
    </section>
  );
}